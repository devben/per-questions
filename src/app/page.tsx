import Questions from "./questions/Questions";
import SelectCourse from "./questions/SelectCourse";
import StickyFooter from "./questions/StickyFooter";

export default function Home() {
  return (
    <>
      <div 
        className="w-full h-52 sm:h-62 md:h-72 lg:h-[576px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("./images/per.png")' }}
      />
      <div className=" min-h-screen p-8 pb-20 gap-16 sm:p-20 sm:pt-12">
        <SelectCourse />
        <Questions />
      
    </div>
    <StickyFooter />
    </>
  );
}
