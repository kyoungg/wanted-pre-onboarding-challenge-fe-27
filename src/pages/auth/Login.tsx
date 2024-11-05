import Button from "../../components/common/Button";

export default function Login() {
  return (
    <>
      <Button size={"small"} color={"green"} title={"삭제"} type={"button"} />
      <Button
        size={"large"}
        color={"gray"}
        title={"SIGN IN"}
        type={"button"}
        isDisabled
      />
    </>
  );
}
