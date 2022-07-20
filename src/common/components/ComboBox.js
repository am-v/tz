/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable arrow-body-style */
/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

import tzs from 'common/constants/tzx.json';

const ComboBox = ({ selectedItem, setSelectedItem }) => {
  const [query, setQuery] = useState('');

  const filterList =
    query === ''
      ? tzs
      : tzs.filter((tz) => {
          if (tz.tag.toLowerCase() === query.toLowerCase()) {
            return true;
          }
          if (query.length > 3) {
            return (
              tz.name
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.toLowerCase().replace(/\s+/g, '')) ||
              tz.code
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.toLowerCase().replace(/\s+/g, '')) ||
              tz.text
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.toLowerCase().replace(/\s+/g, ''))
            );
          }
          return false;
        });

  return (
    <Combobox value={selectedItem} onChange={setSelectedItem}>
      <div className="relative">
        <div className="flex w-full">
          <Combobox.Input
            className="relative w-full cursor-default overflow-hidden rounded border-2 border-primary-light bg-space-light px-2 py-3 pr-10 font-medium shadow-sm transition-all focus:border-brand"
            displayValue={(item) => item.code}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <SelectorIcon
              className="h-5 w-5 text-primary-light"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-50"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className="shadow-xs absolute mt-1 max-h-44 w-full overflow-auto rounded border-2 border-grey-dark bg-card py-1 focus:outline-none">
            {filterList.length === 0 && query !== '' ? (
              <div className="relative cursor-default select-none py-2 px-4 text-primary-light">
                Nothing found 😟.
              </div>
            ) : (
              filterList.map((item) => (
                <Combobox.Option
                  key={item.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 text-sm ${
                      active
                        ? 'bg-brand text-brand-invert'
                        : 'text-primary-light'
                    }`
                  }
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {item.code}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? 'text-white' : 'text-brand'
                          }`}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};

export default ComboBox;
