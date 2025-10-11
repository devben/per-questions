import Questions from "./questions/Questions";
import SelectCourse from "./questions/SelectCourse";
import StickyFooter from "./questions/StickyFooter";

export default function Home() {
  return (
    <><div className=" min-h-screen p-8 pb-20 gap-16 sm:p-20 sm:pt-12">
      <SelectCourse />
      <Questions />
      
    </div>
    <StickyFooter />
    </>
  );
}
