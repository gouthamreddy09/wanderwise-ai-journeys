
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

const TripForm = () => {
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [budget, setBudget] = useState<number[]>([500]);
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <h3 className="text-2xl font-bold mb-6 text-gray-900">Plan Your AI-Powered Trip</h3>
      
      <div className="space-y-6">
        <div>
          <Label htmlFor="destination">Where do you want to go?</Label>
          <Input id="destination" placeholder="City, Country or Region" className="mt-1" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Start Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start mt-1">
                  {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
                  <CalendarIcon className="ml-auto h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={setStartDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div>
            <Label>End Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start mt-1">
                  {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
                  <CalendarIcon className="ml-auto h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={setEndDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        
        <div>
          <Label>Travelers</Label>
          <Select>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Number of travelers" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="1">1 person</SelectItem>
                <SelectItem value="2">2 people</SelectItem>
                <SelectItem value="3">3 people</SelectItem>
                <SelectItem value="4">4 people</SelectItem>
                <SelectItem value="5">5+ people</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <Label>Budget Range</Label>
            <span className="text-travel-600 font-medium">${budget[0]}</span>
          </div>
          <Slider
            defaultValue={[500]}
            max={5000}
            step={100}
            onValueChange={setBudget}
          />
          <div className="flex justify-between mt-1 text-sm text-gray-500">
            <span>$100</span>
            <span>$5000</span>
          </div>
        </div>
        
        <div>
          <Label>Trip Type</Label>
          <Select>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select trip type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="adventure">Adventure</SelectItem>
                <SelectItem value="relaxation">Relaxation</SelectItem>
                <SelectItem value="culture">Cultural</SelectItem>
                <SelectItem value="food">Food & Culinary</SelectItem>
                <SelectItem value="family">Family</SelectItem>
                <SelectItem value="romantic">Romantic</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        <Button className="w-full bg-travel-500 hover:bg-travel-600 text-white">
          Generate Itinerary
        </Button>
      </div>
    </div>
  );
};

export default TripForm;
