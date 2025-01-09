"use client";
import { Skills } from "@/helper/data";
import Image from "next/image";
import Card from "../ui/Card";

const Clients = () => {
  return (
    <section className="c-space mt-20 pb-20 overflow-hidden ">
      <h3 className="head-text">My Skills</h3>

      <div className="client-container">
        {Skills.map((item) => (
          <Card key={item?.id}>
            <div className="flex flex-col h-full  space-y-4 justify-between items-center ">
              <Image
                src={item?.img}
                alt={item?.name}
                width={100}
                height={100}
                className="md:size-24 size-14"
              />
              <p className="text-xl">{item?.name}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Clients;
