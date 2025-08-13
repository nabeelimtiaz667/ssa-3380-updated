export default function FormContainer({ children, id = "", display = "none" }) {
  return (
    <div
      className="working-form flex flex-col gap-5 mb-7"
      id={id}
      style={{ display: display }}
    >
      {children}
    </div>
  );
}
