'use client';

import ChevronLeftIcon from '@spectrum-icons/workflow/ChevronLeft';
import ChevronRightIcon from '@spectrum-icons/workflow/ChevronRight';
import ChevronUpDownIcon from '@spectrum-icons/workflow/ChevronUpDown';
import * as RAC from 'react-aria-components';

function DatePicker() {
  return (
    <div className="flex items-start justify-center rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-600 p-12 sm:h-[400px]">
      <RAC.DatePicker className="group flex w-[200px] flex-col gap-1">
        <RAC.Label className="cursor-default text-white">Date</RAC.Label>
        <RAC.Group className="flex rounded-lg bg-white/90 pl-3 text-gray-700 shadow-md ring-black transition group-open:bg-white focus-within:bg-white focus-visible:ring-2">
          <RAC.DateInput className="flex flex-1 py-2">
            {(segment) => (
              <RAC.DateSegment
                className="rounded-sm px-0.5 tabular-nums caret-transparent outline-none placeholder-shown:italic focus:bg-violet-700 focus:text-white"
                segment={segment}
              />
            )}
          </RAC.DateInput>
          <RAC.Button className="flex items-center rounded-r-lg border-0 border-l border-solid border-l-purple-200 bg-transparent px-3 text-gray-700 outline-none ring-black transition focus-visible:ring-2 pressed:bg-purple-100">
            <ChevronUpDownIcon size="XS" UNSAFE_className="min-w-[1rem]" />
          </RAC.Button>
        </RAC.Group>
        <MyPopover>
          <RAC.Dialog className="p-6 text-gray-600">
            <RAC.Calendar>
              <header className="font-serif flex w-full items-center gap-1 px-1 pb-4">
                <RAC.Heading className="ml-2 flex-1 text-2xl font-semibold" />
                <RoundButton slot="previous">
                  <ChevronLeftIcon />
                </RoundButton>
                <RoundButton slot="next">
                  <ChevronRightIcon />
                </RoundButton>
              </header>
              <RAC.CalendarGrid className="border-separate border-spacing-1">
                <RAC.CalendarGridHeader>
                  {(day) => (
                    <RAC.CalendarHeaderCell className="text-xs font-semibold text-gray-500">
                      {day}
                    </RAC.CalendarHeaderCell>
                  )}
                </RAC.CalendarGridHeader>
                <RAC.CalendarGridBody>
                  {(date) => (
                    <RAC.CalendarCell
                      className="flex size-9 cursor-default items-center justify-center rounded-full outline-none ring-violet-600/70 ring-offset-2 outside-month:text-gray-300 hover:bg-gray-100 focus-visible:ring pressed:bg-gray-200 selected:bg-violet-700 selected:text-white"
                      date={date}
                    />
                  )}
                </RAC.CalendarGridBody>
              </RAC.CalendarGrid>
            </RAC.Calendar>
          </RAC.Dialog>
        </MyPopover>
      </RAC.DatePicker>
    </div>
  );
}

function RoundButton(props: RAC.ButtonProps) {
  return (
    <RAC.Button
      {...props}
      className="flex size-9 cursor-default items-center justify-center rounded-full border-0 bg-transparent text-gray-600 outline-none ring-violet-600/70 ring-offset-2 hover:bg-gray-100 focus-visible:ring pressed:bg-gray-200"
    />
  );
}

function MyPopover(props: RAC.PopoverProps) {
  return (
    <RAC.Popover
      {...props}
      className={({isEntering, isExiting}) => `
        overflow-auto rounded-lg drop-shadow-lg ring-1 ring-black/10 bg-white
        ${
          isEntering
            ? 'animate-in fade-in placement-bottom:slide-in-from-top-1 placement-top:slide-in-from-bottom-1 ease-out duration-200'
            : ''
        }
        ${
          isExiting
            ? 'animate-out fade-out placement-bottom:slide-out-to-top-1 placement-top:slide-out-to-bottom-1 ease-in duration-150'
            : ''
        }
      `}
    />
  );
}

export {DatePicker};
