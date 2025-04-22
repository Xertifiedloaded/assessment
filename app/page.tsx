"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CheckIcon,
  XIcon,
  ChevronRightIcon,
  PlusIcon,
  HomeIcon,
  SearchIcon,
  BellIcon,
  DownloadIcon,
  UploadIcon,
  ChevronLeftIcon,
  FilterIcon,
  TrashIcon,
  Clock,
} from "lucide-react";
import Image from "next/image";

const DoubleCheckIcon = ({ size = 16, color = "currentColor" }) => {
  return (
    <span className={`relative inline-flex font-light text-[#1C1C1C]`}>
      <CheckIcon size={size} color={color} className="absolute -left-1" />
      <CheckIcon size={size} color={color} />
    </span>
  );
};

export default function MenuPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const menuItems = [
    {
      name: "Fried Rice with Chicken",
      price: "NGN 10,000",
      cookingTime: "35 minutes",
      calories: "20 Calories",
      type: "Combo",
      image: "/egusi.svg",
    },
    {
      name: "Spaghetti Carbonara",
      price: "NGN 8,000",
      cookingTime: "25 minutes",
      calories: "450 Calories",
      type: "Combo",
      image: "/egusi.svg",
    },
    {
      name: "Caesar Salad",
      price: "NGN 5,000",
      cookingTime: "15 minutes",
      calories: "300 Calories",
      type: "Combo",
      image: "/egusi.svg",
    },
    {
      name: "Chicken Tacos",
      price: "NGN 7,000",
      cookingTime: "12 minutes",
      calories: "350 Calories",
      type: "Single",
      image: "/egusi.svg",
    },
    {
      name: "Grilled Salmon",
      price: "NGN 15,000",
      cookingTime: "30 minutes",
      calories: "250 Calories",
      type: "Combo",
      image: "/egusi.svg",
    },
    {
      name: "Margherita Pizza",
      price: "NGN 12,000",
      cookingTime: "20 minutes",
      calories: "400 Calories",
      type: "Combo",
      image: "/egusi.svg",
    },
  ];

  const totalItems = 236;
  const itemsPerPage = 50;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderStatus = (status: boolean) => {
    return status ? (
      <DoubleCheckIcon color="#1C1C1C" size={16} />
    ) : (
      <XIcon className="mx-auto h-4 w-4 text-[#1C1C1C]" />
    );
  };

  const ColumnHeader = ({ title }: { title: string }) => (
    <div className="flex items-center">
      <Badge
        variant="outline"
        className="px-2 py-0.5 h-6 font-normal flex items-center gap-1"
      >
        {title}
        <ChevronRightIcon className="h-3 w-3 rotate-90 ml-1" />
      </Badge>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <header className=" p-2 border-b flex items-center">
        <HomeIcon className="w-4 h-4 hidden md:block font-normal " />
        <Button
          variant="outline"
          className="mx-2  bg-color sm:mx-4 flex items-center px-2 sm:px-4 py-1  shadow-sm text-sm font-normal rounded-md  ml-8 lg:ml-4"
        >
          <span className="truncate">Menu</span>×
        </Button>

        <button className="p-1 hidden sm:block">+</button>

        <div className="ml-auto relative">
          <BellIcon className="w-6 h-6" />
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
            1
          </span>
        </div>
      </header>

      <main className="flex-1  p-4 sm:p-6">
        <div className="sm:flex p-3 mb-6 rounded-3xl  sm:items-center bg-[#F6F6F6] shadow-sm  sm:justify-between">
          <div className="">
            <h1 className="text-lg font-extralight">MENU LIST</h1>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row justify-end ">
            <Button
              variant="outline"
              className="flex text-[#1C1C1C] font-normal p-4 items-center gap-2 text-xs "
            >
              <DownloadIcon className="w-4 h-4" />
              <span className="hidden sm:inline">
                Download template in csv file
              </span>
              <span className="inline sm:hidden">Download CSV</span>
            </Button>
            <Button
              variant="outline"
              className="flex text-[#1C1C1C] font-normal p-4 items-center gap-2 text-xs "
            >
              <UploadIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Upload csv file</span>
              <span className="inline sm:hidden">Upload CSV</span>
            </Button>
          </div>
        </div>

        <div className=" bg-[#F6F6F6] rounded-lg shadow-sm">
          <div className="p-3 sm:p-4 border-b flex flex-col sm:flex-row gap-3">
            <div className="flex items-center">
              <FilterIcon className="w-5 h-5 mr-2" />
              <span className="font-bold whitespace-nowrap">
                FOOD MENU LIST
              </span>
            </div>

            <div className="flex w-full sm:w-auto flex-col sm:flex-row sm:ml-auto gap-2">
              <div className="relative bg-white flex-grow sm:flex-grow-0">
                <Input
                  type="text"
                  placeholder="Search menu"
                  className="pl-8 w-full text-black sm:w-52 md:w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <SearchIcon className="w-4 h-4 absolute left-2.5 top-2.5 text-gray-500" />
              </div>

              <div className="flex items-center gap-1 self-end sm:self-auto">
                <Button variant="outline" className="text-xs text-gray-500">
                  {(currentPage - 1) * itemsPerPage + 1} -{" "}
                  {Math.min(currentPage * itemsPerPage, totalItems)} of{" "}
                  {totalItems}
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevPage}
                  disabled={currentPage === 1}
                >
                  <ChevronLeftIcon className="h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRightIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="sm:hidden divide-y">
            {menuItems.map((item, i) => (
              <div key={i} className="p-4">
                <div className="flex items-center mb-2">
                  <div className="w-12 h-12 mr-3 rounded overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.price}</p>
                  </div>
                  <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-gray-500">Time:</span>{" "}
                    {item.cookingTime}
                  </div>
                  <div>
                    <span className="text-gray-500">Type:</span> {item.type}
                  </div>
                  <div>
                    <span className="text-gray-500">Calories:</span>{" "}
                    {item.calories}
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500">Available:</span>
                    <span className="ml-1">{renderStatus(i % 2 === 0)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden bg-transparent sm:block">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <ColumnHeader title="Name" />
                  </TableHead>
                  <TableHead>
                    <ColumnHeader title="Price" />
                  </TableHead>
                  <TableHead>
                    <ColumnHeader title="Cooking Time" />
                  </TableHead>
                  <TableHead>
                    <ColumnHeader title="Calories" />
                  </TableHead>
                  <TableHead>
                    <ColumnHeader title="Type" />
                  </TableHead>
                  <TableHead className="text-center">
                    <ColumnHeader title="Category" />
                  </TableHead>
                  <TableHead className="text-center hidden lg:table-cell">
                    <ColumnHeader title="Adds-Ons" />
                  </TableHead>
                  <TableHead className="text-center hidden lg:table-cell">
                    <ColumnHeader title="Dietary" />
                  </TableHead>
                  <TableHead className="text-center hidden md:table-cell">
                    <ColumnHeader title="Availability" />
                  </TableHead>
                  <TableHead className="text-center hidden md:table-cell">
                    <ColumnHeader title="Promotion" />
                  </TableHead>
                  <TableHead className="w-10">
                    <Badge
                      variant="outline"
                      className="px-2 py-0.5 h-6 font-normal flex items-center gap-1"
                    >
                      <Clock />
                    </Badge>
                  </TableHead>
                  <TableHead className="w-10">
                    <Badge
                      variant="outline"
                      className="px-2 py-0.5 h-6 font-normal flex items-center gap-1"
                    >
                      <TrashIcon />
                    </Badge>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {menuItems.map((item, i) => (
                  <TableRow key={i} className="hover:bg-gray-50">
                    <TableCell>
                      <div className="flex items-center">
                        <div className="w-16 h-16 mr-3 rounded overflow-hidden">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="font-medium">{item.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>{item.cookingTime}</TableCell>
                    <TableCell>{item.calories}</TableCell>
                    <TableCell>{item.type}</TableCell>
                    <TableCell className="text-center">
                      {renderStatus(i % 2 === 0)}
                    </TableCell>
                    <TableCell className="text-center hidden lg:table-cell">
                      {renderStatus(i % 3 === 0)}
                    </TableCell>
                    <TableCell className="text-center hidden lg:table-cell">
                      {renderStatus(i % 2 === 1)}
                    </TableCell>
                    <TableCell className="text-center hidden md:table-cell">
                      {renderStatus(i % 3 === 1)}
                    </TableCell>
                    <TableCell className="text-center hidden md:table-cell">
                      {renderStatus(i % 2 === 0)}
                    </TableCell>

                    <TableCell className="text-center">
                      <Button
                        className="bg-[#F6F6F6] h-12 w-12   "
                        variant="outline"
                        size="icon"
                      >
                        <ChevronRightIcon className="h-5 w-5" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>

      <div className="fixed bottom-4 sm:bottom-8  right-4 sm:right-8 z-10">
        <Button size="icon" className="h-14 w-14 border    bg-color     shadow-3xl">
          <div className="border border-black rounded-sm p-1 text-black">
            <PlusIcon className="h-6 w-6" />
          </div>
        </Button>
      </div>
    </div>
  );
}
