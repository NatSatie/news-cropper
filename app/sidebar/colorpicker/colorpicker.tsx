"use client";

import React from 'react';
import { Button, ColorPicker as AriaColorPicker, ColorPickerProps as AriaColorPickerProps, DialogTrigger } from 'react-aria-components';
import { ColorSwatch as AriaColorSwatch, ColorSwatchProps } from 'react-aria-components';
import {
    ColorArea as AriaColorArea,
    ColorAreaProps as AriaColorAreaProps
} from 'react-aria-components';
import { ColorThumb as AriaColorThumb, ColorThumbProps } from 'react-aria-components';
import { ColorSlider } from './colorslider';
import { ColorField } from './colorfield';
import { Dialog } from './dialog';
import { Popover } from './../select/popover';
import { tv } from 'tailwind-variants';
import { focusRing, composeTailwindRenderProps } from './../utils';

const buttonStyles = tv({
    extend: focusRing,
    base: 'border-0 bg-transparent flex gap-2 items-center cursor-default rounded-xs font-sans text-sm text-neutral-800 dark:text-neutral-200 [-webkit-tap-highlight-color:transparent]'
});

export interface ColorPickerProps extends Omit<AriaColorPickerProps, 'children'> {
    label?: string;
    children?: React.ReactNode;
}

export function ColorPicker({ label, children, ...props }: ColorPickerProps) {
    return (
        <AriaColorPicker {...props}>
            <DialogTrigger>
                <Button className={buttonStyles}>
                    <ColorSwatch />
                    <span>{label}</span>
                </Button>
                <Popover placement="bottom start">
                    <Dialog className="flex flex-col gap-2">
                        {children || (
                            <>
                                <ColorArea
                                    colorSpace="hsb"
                                    xChannel="saturation"
                                    yChannel="brightness"
                                />
                                <ColorSlider colorSpace="hsb" channel="hue" />
                                <ColorField label="Hex" />
                            </>
                        )}
                    </Dialog>
                </Popover>
            </DialogTrigger>
        </AriaColorPicker>
    );
}

export function ColorSwatch(props: ColorSwatchProps) {
    return (
        <AriaColorSwatch
            {...props}
            className={composeTailwindRenderProps(props.className, 'w-8 h-8 box-border rounded-md border border-black/10')}
            style={({ color }) => ({
                background: `linear-gradient(${color}, ${color}),
          repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`
            })} />
    );
}

export interface ColorAreaProps extends AriaColorAreaProps { }

export function ColorArea(props: ColorAreaProps) {
    return (
        <AriaColorArea
            {...props}
            className={composeTailwindRenderProps(props.className, 'w-full max-w-56 aspect-square rounded-lg bg-neutral-300 dark:bg-neutral-800 forced-colors:bg-[GrayText]')}
            style={({ defaultStyle, isDisabled }) => ({
                ...defaultStyle,
                background: isDisabled ? undefined : defaultStyle.background
            })}>
            <ColorThumb />
        </AriaColorArea>
    );
}

const thumbStyles = tv({
    base: 'w-4.5 h-4.5 top-[50%] left-[50%] rounded-full border-2 border-white box-border',
    variants: {
        isFocusVisible: {
            true: 'w-8 h-8'
        },
        isDragging: {
            true: 'bg-neutral-700 dark:bg-neutral-300 forced-colors:bg-[ButtonBorder]'
        },
        isDisabled: {
            true: 'border-neutral-300 dark:border-neutral-700 forced-colors:border-[GrayText] bg-neutral-300 dark:bg-neutral-800 forced-colors:bg-[GrayText]'
        }
    }
});

export function ColorThumb(props: ColorThumbProps) {
    return (
        <AriaColorThumb
            {...props}
            style={({ defaultStyle, isDisabled }) => ({
                ...defaultStyle,
                backgroundColor: isDisabled ? undefined : defaultStyle.backgroundColor,
                boxShadow: '0 0 0 1px black, inset 0 0 0 1px black'
            }
            )}
            className={thumbStyles} />
    );
}