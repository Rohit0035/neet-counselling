import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    FormGroup,
    Label,
    Input
} from "reactstrap";

import { FiHeart } from "react-icons/fi";

export default function AddChoiceListModal({
    isOpen,
    onCloseModal,
    onSaveChoice
}) {
    return (
        <Modal
            isOpen={isOpen}
            toggle={onCloseModal}
            centered
            scrollable
            size="md"
        >
            <ModalHeader toggle={onCloseModal}>
                Add to Choice List
            </ModalHeader>

            <ModalBody>

                <FormGroup>
                    <Label>Counselling</Label>
                    <Input
                        type="text"
                        value="All India Counselling - SS Medical"
                        disabled
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Institute</Label>
                    <Input type="select">
                        <option>Select Institute</option>
                        <option>Institute 1</option>
                        <option>Institute 2</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label>Course</Label>
                    <Input type="select">
                        <option>Select Course</option>
                        <option>MD</option>
                        <option>MS</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label>Quota</Label>
                    <Input type="select">
                        <option>Select Quota</option>
                        <option>AIQ</option>
                        <option>State</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label>Category</Label>
                    <Input type="select">
                        <option>Select Category</option>
                        <option>General</option>
                        <option>OBC</option>
                        <option>SC</option>
                    </Input>
                </FormGroup>

                <Label className="fw-bold mb-2">
                    Insert at
                </Label>

                <FormGroup check className="mb-2">
                    <Input
                        type="radio"
                        name="insertPosition"
                    />
                    <Label check>
                        Top - 1
                    </Label>
                </FormGroup>

                <FormGroup check className="mb-2">
                    <Input
                        type="radio"
                        name="insertPosition"
                        defaultChecked
                    />
                    <Label check>
                        Bottom - 1
                    </Label>
                </FormGroup>

                <FormGroup check className="mb-3">
                    <Input
                        type="radio"
                        name="insertPosition"
                    />
                    <Label check>
                        Custom
                    </Label>
                </FormGroup>

                <Input
                    placeholder="Enter choice number"
                />

            </ModalBody>

            <ModalFooter>

                <Button
                    color="light"
                    onClick={onCloseModal}
                >
                    Cancel
                </Button>

                <Button
                    color="dark"
                    onClick={onSaveChoice}
                    className="btn-sm st-bg"
                >
                    <FiHeart className="me-2 " />
                    Add to Choice List
                </Button>

            </ModalFooter>
        </Modal>
    );
}