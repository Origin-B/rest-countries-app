export default function Paragraph({
  variable,
  value,
}: {
  variable: string;
  value: string;
}) {
  return (
    <p className="font-semibold">
      {variable}: <span className="font-light">{value}</span>
    </p>
  );
}
