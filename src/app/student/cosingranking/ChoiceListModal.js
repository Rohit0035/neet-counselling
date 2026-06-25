"use client";

import { useMemo, useState } from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Button,
    Card,
    CardBody,
    InputGroup,
    InputGroupText,
} from "reactstrap";

import {
    FiHeart,
    FiSearch,
} from "react-icons/fi";

const ChoiceListModal = ({
    isOpen,
    toggle,
}) => {
    const [search, setSearch] = useState("");

    const [newListName, setNewListName] =
        useState("");

    const [choiceLists, setChoiceLists] =
        useState(
            Array.from(
                { length: 20 },
                (_, index) => ({
                    id: index + 1,
                    name: `Choice List ${index + 1}`,
                    choices: index * 2,
                })
            )
        );

    const createChoiceList = () => {
        if (!newListName.trim()) return;

        setChoiceLists((prev) => [
            {
                id: Date.now(),
                name: newListName,
                choices: 0,
            },
            ...prev,
        ]);

        setNewListName("");
    };

    const filteredLists = useMemo(() => {
        return choiceLists.filter((item) =>
            item.name
                .toLowerCase()
                .includes(search.toLowerCase())
        );
    }, [search, choiceLists]);

    const handleCancel = () => {
        setNewListName("");
    };

    return (
        <Modal
            isOpen={isOpen}
            toggle={toggle}
            centered
            size="lg"
            scrollable
        >
            <ModalHeader toggle={toggle}>
                Add to Choice List
            </ModalHeader>
            <ModalBody>

                <InputGroup className="mb-4">
                    <InputGroupText>
                        <FiSearch />
                    </InputGroupText>

                    <Input
                        placeholder="Search Choice List"
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />
                </InputGroup>


                <h5 className="fw-bold mb-4">
                    INICET - PG Medical
                </h5>


                <Card className="bg-light border-0 mb-4">
                    <CardBody>
                        <h6 className="mb-3">
                            Create new choice list
                        </h6>

                        <Input
                            value={newListName}
                            onChange={(e) =>
                                setNewListName(e.target.value)
                            }
                            placeholder="Enter choice list name"
                            className="mb-3"
                        />

                        <div className="d-flex gap-2">
                            <Button
                                color="danger"
                                onClick={handleCancel}
                                className="btn-sm "
                            >
                                Cancel
                            </Button>

                            <Button
                                color="danger"
                                onClick={createChoiceList}
                                className="btn-sm st-bg"
                            >
                                Create
                            </Button>
                        </div>
                    </CardBody>
                </Card>

                {filteredLists.length > 0 ? (
                    filteredLists.map((item) => (
                        <Card
                            key={item.id}
                            className="bg-light border-0 mb-3"
                        >
                            <CardBody>
                                <div className="d-flex align-items-center gap-3">
                                    <FiHeart
                                        size={24}
                                        className="text-dark"
                                    />

                                    <div>
                                        <div className="fw-bold">
                                            {item.name}
                                        </div>

                                        <small className="text-muted">
                                            {item.choices} Choices
                                        </small>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    ))
                ) : (
                    <div className="text-center text-muted py-4">
                        No Choice Lists Found
                    </div>
                )}
            </ModalBody>

            <ModalFooter>
                <Button
                    color="danger"
                    onClick={toggle}
                    className="btn-sm st-bg"
                >
                    Done
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default ChoiceListModal;