import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Объединяет и оптимизирует классы Tailwind CSS
 * @param inputs Классы для объединения
 * @returns Оптимизированная строка классов
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Разделяет массив на части
 * @param array Исходный массив
 * @param chunkSize Размер части
 * @returns Массив с частями исходного массива
 */
export function splitArray<T>(array: T[], chunkSize: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

/**
 * Форматирует дату в читаемый вид
 * @param date Строка или объект Date
 * @returns Отформатированная дата
 */
export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Проверяет, является ли значение объектом
 * @param value Проверяемое значение
 * @returns true, если значение является объектом
 */
export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Создает задержку
 * @param ms Время задержки в миллисекундах
 * @returns Promise, который разрешится после задержки
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Генерирует уникальный ID
 * @returns Уникальный строковый ID
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 11);
}

/**
 * Проверяет, является ли строка валидным URL
 * @param url Строка для проверки
 * @returns true, если строка является валидным URL
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Преобразует строку в camelCase
 * @param str Исходная строка
 * @returns Строка в camelCase
 */
export function toCamelCase(str: string): string {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}