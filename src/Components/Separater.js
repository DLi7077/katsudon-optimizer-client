export default function Separater({ style }) {
  return (
    <div
      style={{
        height: "1px",
        backgroundColor: "white",
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
        width: "100%",
        ...style,
      }}
    />
  );
}
