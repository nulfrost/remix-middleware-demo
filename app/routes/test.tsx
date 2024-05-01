export async function loader() {
  console.log("loader inside of test");
  return null;
}

export default function Component() {
  return <div>test</div>;
}
