import { BatchesTable } from "@/components/DataTables/BatchTable";
import { BatchModal } from "@/components/Dialogs/BatchModal";


export default function Batches() {
    return (
      <div className="min-h-screen p-10">
        <div className="flex justify-between m-4">
        <h1 className="text-4xl font-bold text-center text-blue-800">Batches</h1>
        <BatchModal/>
        </div>

 <BatchesTable/>
      </div>
    );
  }