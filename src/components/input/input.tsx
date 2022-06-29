import { Input } from "./input.styled";

interface Props {
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

const InputComponent = ({ placeholder, onChange, value }: Props) => {
    return (
        <Input placeholder={placeholder} onChange={onChange} value={value} />
    );
};

export default InputComponent;
