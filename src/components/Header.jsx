export default function Header(
  // Props are passed in as an object. We can destructure the object to get the properties we want.
  { text }
) {
  return <h1 className="text-3xl font-bold underline">{text}</h1>;
}
