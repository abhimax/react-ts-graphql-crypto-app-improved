import { Button } from "./button.styled";

interface Props {
    label: string;
    onClick: () => void;
    disabled: boolean;
}

const ButtonComponent = ({ label, onClick, disabled }: Props) => {
    return (
        <Button as="button" onClick={onClick} disabled={disabled}>
            {label}
        </Button>
    );
};

export default ButtonComponent;
