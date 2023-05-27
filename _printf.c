#include "main.h"
void print_buffer(char buffer[], int *buff_ind);
/**
 * _printf - The function that produces output according to a format.
 * @format: A character string.
 *
 * Return: The number of characters printed.
 */
int _printf(const char *format, ...)
{
	int x, prt = 0, prt_ch = 0;
	int flags, width, precision, size, buff_ind = 0;
	va_list lst;
	char buffer[BUFF_SIZE];

	if (format == NULL)
		return (-1);
	va_start(lst, format);
	for (x = 0; format && format[x] != '\0'; x++)
	{
		if (format[x] != '%')
		{
			buffer[buff_ind++] = format[x];
			if (buff_ind == BUFF_SIZE)
				print_buffer(buffer, &buff_ind);
			prt_ch++;
		}
		else
		{
			print_buffer(buffer, &buff_ind);
			flags = get_flags(format, &x);
			width = get_width(format, &x, lst);
			precision = get_precision(format, &x, lst);
			size = get_size(format, &x);
			++x;
			prt = handle_print(format, &x, lst, buffer,
					flags, width, precision, size);
			if (prt == -1)
				return (-1);
			prt_ch += prt;
		}
	}
	print_buffer(buffer, &buff_ind);
	va_end(lst);
	return (prt_ch);
}
/**
 * print_buffer - Print the contents of the buffer.
 * @buffer: Array of chars.
 *
 * @buff_ind: Index at which to add next char, represents the length.
 */

void print_buffer(char buffer[], int *buff_ind)
{
	if (*buff_ind > 0)
		write(1, &buffer[0], *buff_ind);
	*buff_ind = 0;
}
