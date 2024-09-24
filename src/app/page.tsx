import Image from "next/image";
import Results from "./questions/Results";
import Questions from "./questions/Questions";
import SelectCourse from "./questions/SelectCourse";

export default function Home() {
  return (
    <div className="  min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <Results />
      <SelectCourse />
      <Questions />

    </div>
  );
}
