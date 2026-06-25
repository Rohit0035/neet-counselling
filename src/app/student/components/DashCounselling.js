"use client";

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Button
} from "reactstrap";
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    BarChart,
    Bar,
    XAxis,
    Tooltip
} from "recharts";

const closingRankData = [
    { round: "R1", rank: 3200 },
    { round: "R2", rank: 4100 },
    { round: "R3", rank: 5200 },
    { round: "R4", rank: 6100 },
];

const allotmentData = [
    { round: "R1", seats: 850 },
    { round: "R2", seats: 730 },
    { round: "R3", seats: 580 },
    { round: "R4", seats: 420 },
];

const DashCounselling = () => {
    return (
        <>
            <section className="pt-4 pb-0">
                <h4 className="mb-1 fw-bold">
                    Your Complete Counselling Companion
                </h4>
                <p className="mt-0 mb-2 text-muted">
                    Explore historical counselling data, compare institutes, analyze cut-offs,
                    and track allotment trends across multiple rounds from a single platform.
                </p>
                <Row>
                    <Row className="mt-2">
                        <Col lg="6" md="6" className="mb-2" data-aos="zoom-in">
                            <Card className="border-0 shadow-sm h-100">
                                <CardBody className="d-flex flex-column">

                                    <h6 className="fw-bold mb-2">
                                        Closing Ranks / Cut-Offs
                                    </h6>

                                    <p className="text-muted small mb-3">
                                        Track round-wise closing ranks across colleges, categories,
                                        and quotas to evaluate admission possibilities and identify
                                        trends from previous counselling cycles.
                                    </p>

                                    <div style={{ height: 220 }}>
                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart data={closingRankData}>
                                                <XAxis dataKey="round" />
                                                <Tooltip />
                                                <Area
                                                    type="monotone"
                                                    dataKey="rank"
                                                    stroke="#4F46E5"
                                                    fill="#C7D2FE"
                                                    strokeWidth={3}
                                                />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </div>

                                    <div className="mt-auto">
                                        <Button
                                            color="primary"
                                            className="btn-sm rounded-pill bg-st"
                                        >
                                            Explore Closing Ranks
                                        </Button>
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6" md="6" className="mb-2" data-aos="zoom-in">
                            <Card className="border-0 shadow-sm h-100">
                                <CardBody className="d-flex flex-column">

                                    <h6 className="fw-bold mb-2">
                                        Allotments
                                    </h6>

                                    <p className="text-muted small mb-3">
                                        Understand seat allocation patterns through round-wise
                                        allotment data. Analyze institute preferences, seat
                                        distribution, and counselling outcomes.
                                    </p>

                                    <div style={{ height: 220 }}>
                                        <ResponsiveContainer width="100%" height="100%">
                                            <BarChart data={allotmentData}>
                                                <XAxis dataKey="round" />
                                                <Tooltip />
                                                <Bar
                                                    dataKey="seats"
                                                    fill="#14B8A6"
                                                    radius={[6, 6, 0, 0]}
                                                />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>

                                    <div className="mt-auto">
                                        <Button
                                            className="btn-sm rounded-pill bg-st"
                                        >
                                            Explore Allotments
                                        </Button>
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Row>
            </section>

        </>
    );
};

export default DashCounselling;