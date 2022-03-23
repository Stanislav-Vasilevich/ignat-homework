import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent, FocusEvent} from 'react'
import s from './SuperInputText.module.css'
import {log} from 'util';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperInputTextPropsType = Omit<DefaultInputPropsType, 'type'> & { // и + ещё пропсы которых нет в стандартном инпуте
  name?: string
  onChangeText?: (value: string) => void
  onEnter?: () => void
  error?: string
  spanClassName?: string
  placeholder?: string
}

const SuperInputText = (props: SuperInputTextPropsType) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange // если есть пропс onChange
    && props.onChange(e) // то передать ему е (поскольку onChange не обязателен)

    props.onChangeText && props.onChangeText(e.currentTarget.value)
  }

  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
    props.onKeyPress && props.onKeyPress(e);

    props.onEnter // если есть пропс onEnter
    && e.key === 'Enter' // и если нажата кнопка Enter
    && props.onEnter() // то вызвать его
  }

  const onBlurCallBack = (e: FocusEvent<HTMLInputElement> ) => {
    props.onBlur && props.onBlur(e); // если есть пропс onBlur тогда вызываем его
  }

  const finalSpanClassName = `${s.errorText} ${props.spanClassName ? props.spanClassName : ''}`
  const finalInputClassName = `${props.error ? s.errorInput : s.superInput} ${props.className ? props.className : ''}`

  return (
    <>
      <input
        type={'text'}
        placeholder={props.placeholder}
        className={finalInputClassName}
        onChange={onChangeCallback}
        onKeyPress={onKeyPressCallback}
        onBlur={onBlurCallBack}
        autoFocus={props.autoFocus}
      />
      {props.error && <span className={finalSpanClassName}>{props.error}</span>}
    </>
  )
}

export default SuperInputText;
