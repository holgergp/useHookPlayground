import { UseAPI } from "../components/useAPI/UseAPI";

export default async function HomePage() {
  return <UseAPI />;
}

export const getConfig = async () => {
  return {
    render: "static",
  };
};
