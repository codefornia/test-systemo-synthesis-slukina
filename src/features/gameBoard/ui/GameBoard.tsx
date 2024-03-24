import { ChangeEvent, FormEvent, MutableRefObject, useRef, useState } from 'react';
import { ratesOptions, availableRates, rateValueSpecific } from '../model/const';
import { Select, Dice, Button, Input, diceRoll } from '@shared/ui';
import { userModel } from '@entities/user';
import './style.scss';
import { SelectOption } from '@shared/ui/select';

export function GameBoard() {
  const user = userModel.selectors.useUser();

  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [specificInputValue, setSpecificInputValue] = useState<string>('');
  const [isSpecificInputDisabled, setSpecificInputDisabled] = useState<boolean>(true);
  const [rollResult, setRollResult] = useState<number | null>(null);
  const [lastGain, setLastGain] = useState<number>(0);
  const [coefficient, setCoefficient] = useState<number>(0);
  const diceRef = useRef<HTMLDivElement | null>();

  const handleSpecificRateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value || '';
    setSpecificInputValue(inputValue);
    setInputValue(inputValue);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value || '';

    setSpecificInputDisabled(value !== rateValueSpecific);
    setCoefficient(value !== rateValueSpecific ? 2 : 3);
    setInputValue(value !== rateValueSpecific ? value : specificInputValue);
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsRolling(true);

    const result: number | null = diceRoll(diceRef.current as HTMLDivElement, () => {
      const target = event.target as typeof event.target & {
        money_rate: { value: string };
      };

      let money = target.money_rate.value;

      setRollResult(result);

      const rateOptions = inputValue.split(',');

      if (!!user && !!money && !!result) {
        let gain = rateOptions.includes(result.toString()) ? +money * +coefficient : -(+money * +coefficient);
        setLastGain(gain);
        userModel.events.setBalance(+gain + user.balance);
      }

      setIsRolling(false);
    });
  }

  const title = !user
    ? 'Войдите, чтобы продолжить'
    : !!rollResult
      ? `Результат броска кубика: ${rollResult}`
      : 'Сделайте ставку';

  const text = !!lastGain && lastGain > 0 ? `Вы выиграли ${lastGain} TND!` : 'Повезет в следующий раз!';

  const availableRatesOptions: SelectOption[] = availableRates.map((availableRate) => ({
    label: availableRate.toFixed(2),
    value: availableRate.toString(),
  }));

  return (
    <>
      <div className="game_title-container">
        <h2 className="game_title">{title}</h2>
        {!!user?.balance && !!rollResult && <p className="game_result">{text}</p>}
      </div>
      <div className={`game_container ${!user?.balance && 'pass-through'}`}>
        <div className="game_dice-container">
          <Dice className="dice" divRef={diceRef as MutableRefObject<HTMLDivElement>} />
        </div>
        <form className="game_rate-form rate_form" onSubmit={handleSubmit}>
          <fieldset className="rate_fieldset">
            <legend className="rate_legend">Размер ставки</legend>
            <Select selectOptions={availableRatesOptions} id="selector_rate" inputName="money_rate" />
          </fieldset>
          <fieldset className="rate_fieldset rate_fieldset--table">
            <legend className="rate_legend">Варианты ставок</legend>
            {ratesOptions.map((option) => {
              return (
                <div
                  className={`rate-form_radio_btn ${option.value === rateValueSpecific && 'rate-form_radio_btn--long'}`}
                  key={option.id}
                >
                  <input
                    type="radio"
                    id={option.id}
                    name="num_rate"
                    value={option.value.toString()}
                    required={true}
                    onChange={handleInputChange}
                  />
                  <label htmlFor={option.id}>{option.title}</label>
                  {option.value === rateValueSpecific && (
                    <Input
                      className="specific-number"
                      type="text"
                      pattern="[1-6]"
                      id="specific-number"
                      name="specific_rate"
                      placeholder="1"
                      onChange={handleSpecificRateChange}
                      disabled={isSpecificInputDisabled}
                      autoComplete="off"
                      value={specificInputValue}
                    />
                  )}
                </div>
              );
            })}
          </fieldset>
          <Button className="rate-form_radio_btn button-submit" type="submit" disabled={isRolling || !inputValue}>
            Сделать ставку
          </Button>
        </form>
      </div>
    </>
  );
}
