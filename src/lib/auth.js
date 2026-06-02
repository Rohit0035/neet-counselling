import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import bcrypt from "bcryptjs";

import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export const authOptions = {

    providers: [

        CredentialsProvider({
            name: "Credentials",

            credentials: {
                email: {},
                password: {},
                role: {},
            },

            async authorize(credentials) {

                await connectDB();

                const user = await User.findOne({
                    email: credentials.email,
                });

                if (!user) {
                    throw new Error("User not found");
                }

                // ADMIN LOGIN
                if (credentials.role === "admin") {

                    if (user.role !== "admin") {
                        throw new Error("Admin access only");
                    }

                    const isPasswordCorrect =
                        await bcrypt.compare(
                            credentials.password,
                            user.password
                        );

                    if (!isPasswordCorrect) {
                        throw new Error("Invalid password");
                    }

                    return {
                        id: user._id.toString(),
                        name: user.name,
                        email: user.email,
                        role: user.role,
                    };
                }

                // STUDENT LOGIN
                if (credentials.role === "student") {

                    if (user.role !== "student") {
                        throw new Error("Student access only");
                    }

                    const isPasswordCorrect =
                        await bcrypt.compare(
                            credentials.password,
                            user.password
                        );

                    if (!isPasswordCorrect) {
                        throw new Error("Invalid password");
                    }

                    return {
                        id: user._id.toString(),
                        name: user.name,
                        email: user.email,
                        role: user.role,
                    };
                }

                return null;
            },
        }),

        GoogleProvider({
            clientId:
                process.env.GOOGLE_CLIENT_ID,

            clientSecret:
                process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],

    callbacks: {

        async jwt({ token, user, account }) {

            await connectDB();

            // GOOGLE LOGIN
            if (account?.provider === "google") {

                let existingUser =
                    await User.findOne({
                        email: token.email,
                    });

                if (!existingUser) {

                    existingUser =
                        await User.create({
                            name: token.name,
                            email: token.email,
                            image: token.picture,
                            role: "student",
                            provider: "google",
                        });
                }

                token.id =
                    existingUser._id.toString();

                token.role =
                    existingUser.role;
            }

            // CREDENTIAL LOGIN
            if (user) {
                token.id = user.id;
                token.role = user.role;
            }

            return token;
        },

        async session({ session, token }) {

            session.user.id = token.id;

            session.user.role = token.role;

            return session;
        },
    },

    session: {
        strategy: "jwt",
    },

    secret: process.env.NEXTAUTH_SECRET,
};