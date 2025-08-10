export default function FormLabel({ id = "", htmlFor = "", children }) {
  return (
    <label className="form-label" id={id} htmlFor={htmlFor}>
      {children}
    </label>
  );
}
