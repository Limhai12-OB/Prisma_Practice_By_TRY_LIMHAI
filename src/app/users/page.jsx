import CardComponent from "../components/CardComponent";

export default async function Page() {
  const res = await fetch("http://localhost:3000/api/users");
  const users = await res.json();

  return <CardComponent users={users} />;
}
