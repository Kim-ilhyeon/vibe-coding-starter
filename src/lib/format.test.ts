import { describe, expect, it } from "vitest";
import { formatPrice } from "@/lib/format";

describe("formatPrice", () => {
  it.each([
    [0, "0원"],
    [12000, "12,000원"],
    [1000000, "1,000,000원"],
  ])("%i에 쉼표와 원 단위를 적용한다", (price, expected): void => {
    // Given
    const input = price;

    // When
    const formatted = formatPrice(input);

    // Then
    expect(formatted).toBe(expected);
  });
});
