#include "main.h"
#include <stdio.h>
#include <stdarg.h>
#include <stdlib.h>
#include <unistd.h>
/**
 * _print_char - Print a character and update the count
 * @args: va_list with the arguments
 * @count: current count of characters printed
 */
void _print_char(va_list args, int *count)
{
	int c = va_arg(args, int);

	putchar(c);
	(*count)++;
}

/**
 * _print_string - Print a string and update the count
 * @args: va_list with the arguments
 * @count: current count of characters printed
 */
void _print_string(va_list args, int *count)
{
	char *s = va_arg(args, char *);

	while (*s != '\0')
	{
		putchar(*s);
		s++;
		(*count)++;
	}
}

/**
 * _printf - Printf function
 * @format: character string.
 * Return: the number of characters printed.
 */
int _printf(const char *format, ...)
{
	va_list args;
	int count = 0;

	va_start(args, format);

	while (*format != '\0')
	{
		if (*format == '%')
		{
			format++;
			if (*format == '\0')
				break;

			if (*format == 'c')
			_print_char(args, &count);
			else if (*format == 's')
			_print_string(args, &count);
			else if (*format == '%')
			{
				putchar('%');
				count++;
			}
		}
		else
		{
			putchar(*format);
			count++;
		}

	format++;
	}

	va_end(args);

	return (count);
}
