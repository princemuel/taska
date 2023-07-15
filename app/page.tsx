import { getAuthSession } from "./api/auth/[...nextauth]/options";

export default async function Home() {
  const session = await getAuthSession();

  return (
    <>
      {session ? (
        <h1 className="text-5xl">{session?.user?.name}</h1>
      ) : (
        <h1 className="text-5xl">You Shall Not Pass!</h1>
      )}
    </>
  );
}
