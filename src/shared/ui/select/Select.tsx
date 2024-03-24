import { JSX, useEffect, useRef, useState } from 'react';
import './style.scss';

export type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  selectOptions: SelectOption[];
  id: string;
  inputName: string;
};

export function Select({ selectOptions, id, inputName }: SelectProps): JSX.Element {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const dropDownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (dropDownRef.current) {
      dropDownRef.current.onclick = function () {
        dropDownRef.current?.classList.toggle('active');
      };
    }
  }, []);

  return (
    <div className="select_dropdown" id={id} ref={dropDownRef}>
      <input type="text" className="select_text" value={selectOptions[selectedOptionIndex].label} readOnly />
      <input type="hidden" name={inputName} value={selectOptions[selectedOptionIndex].value} />
      <div className="select_option">
        {selectOptions.map((option, i) => (
          <div key={option.value} onClick={() => setSelectedOptionIndex(i)}>
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
}
