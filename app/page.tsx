import { Services, ServicesProps } from "@/components/Services";
import { promises } from "fs";

export default async function Home() {
  const file = await promises.readFile(`${process.cwd()}/data.json`, "utf8");
  const data = JSON.parse(file) as { plans: ServicesProps["data"] };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Services data={data.plans} />
    </main>
  );
}
