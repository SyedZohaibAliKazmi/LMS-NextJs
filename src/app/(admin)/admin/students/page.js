import { StudentModal } from "@/components/Dialogs/StudentModal";

export default function Students
() {
    return (
      <div className="min-h-screen p-10">
        <div className="flex justify-between m-4">
        <h1 className="text-4xl font-bold text-center text-red-700">Students</h1>

        <StudentModal/>
        </div>
      </div>
    );
  }