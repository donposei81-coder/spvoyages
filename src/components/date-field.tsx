"use client";

import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

export default function DateField({
  id,
  label,
  value,
  onChange,
  fromDate,
}: {
  id: string;
  label: string;
  value: Date | undefined;
  onChange: (d: Date | undefined) => void;
  fromDate?: Date;
}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <Popover>
        <PopoverTrigger asChild>
          <button type="button" id={id} className="date-field-trigger">
            <CalendarIcon size={16} aria-hidden />
            {value ? format(value, "d MMM yyyy", { locale: fr }) : <span>jj/mm/aaaa</span>}
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            onSelect={onChange}
            locale={fr}
            disabled={fromDate ? { before: fromDate } : undefined}
            autoFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
