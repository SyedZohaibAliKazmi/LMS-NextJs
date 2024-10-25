import { CourseTable } from "@/components/DataTables/CourseTable";
import { CourseDialog } from "@/components/Dialogs/CourseModal";
import { Button } from "@/components/ui/button";

export default function Courses() {
    return (
      <div className="min-h-screen p-10">
        <div className="flex justify-between m-6">
        <h1 className="text-4xl font-bold text-center text-yellow-500">Courses</h1>
        <CourseDialog/>
         </div>
      <CourseTable/>
      </div>
    );
  }