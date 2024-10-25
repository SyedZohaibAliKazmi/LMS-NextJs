
"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data for Trainers and Courses
const trainers = [
  { id: "trainer1", name: "John Doe" },
  { id: "trainer2", name: "Jane Smith" },
  { id: "trainer3", name: "Alice Johnson" },
];

const courses = [
  { id: "course1", name: "Web and App Development" },
  { id: "course2", name: "App Development" },
  { id: "course3", name: "Python Development" },
];

export function StudentModal() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = true;

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Student</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] overflow-y-auto max-h-[80vh]">
          <DialogHeader>
            <DialogTitle className="text-orange-600 text-2xl">Add Student</DialogTitle>
          </DialogHeader>
          <StudentForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Add Student</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Add Student</DrawerTitle>
        </DrawerHeader>
        <StudentForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function StudentForm({ className }) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      {/* User Name */}
      <div className="grid gap-2">
        <Label htmlFor="firstName">First Name</Label>
        <Input required type="text" id="batchName" defaultValue="" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="lastName">Last Name</Label>
        <Input required type="text" id="batchName" defaultValue="" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="education"> Education</Label>
        <Input required type="text" id="education" defaultValue="" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="cnic"> CNIC</Label>
        <Input required type="number" id="cnic" defaultValue="" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="gmail"> E-Mail</Label>
        <Input required type="email" id="email" defaultValue="" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="file"> Profile Picture</Label>
        <Input required type="file" id="file" defaultValue="" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="address">Address</Label>
        <Input required type="text" id="address" defaultValue="" />
      </div>

      {/* Status */}
      <div className="grid gap-2">
        <Label htmlFor="status">Gender</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="Gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Status */}
      <div className="grid gap-2">
        <Label htmlFor="status">Role</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="Gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="trainer">Trainer</SelectItem>
            <SelectItem value="student">Student</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="bg-slate-900 font-semibold  hover:bg-orange-600  text-white hover:text-black ">Submit</Button>
    </form>
  );
}
