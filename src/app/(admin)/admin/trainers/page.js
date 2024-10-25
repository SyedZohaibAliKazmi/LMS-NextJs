import { TrainerModal } from "@/components/Dialogs/TrainerModal";

export default function Trainers() {
    return (
      <div className="min-h-screen p-10">
        <div className="flex justify-between m-4">
        <h1 className="text-4xl font-bold text-center text-green-600">Trainers</h1>
        
        <TrainerModal/>

        </div>
      </div>
    );
  }