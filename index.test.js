import { describe, it, expect } from "vitest";

import {
  sumDouble,
  makes10,
  near100,
  isMultiple35,
  shareLastDigit,
  isColdAndHot,
  makeABBA,
  makeSLS,
  canEnterClub,
  shouldAnswerPhone,
} from "./index.js";

describe("sumDouble", function () {
  it("adds two different positive numbers", function () {
    expect(sumDouble(1, 2)).toBe(3);
  });

  it("adds two different negative numbers", function () {
    expect(sumDouble(-4, -6)).toBe(-10);
  });

  it("adds a positive and a negative number", function () {
    expect(sumDouble(10, -3)).toBe(7);
  });

  it("doubles the sum when numbers are equal and positive", function () {
    expect(sumDouble(2, 2)).toBe(8);
  });

  it("doubles the sum when numbers are equal and negative", function () {
    expect(sumDouble(-3, -3)).toBe(-12);
  });

  it("handles zeros correctly", function () {
    expect(sumDouble(0, 5)).toBe(5);
  });
});

describe("makes10", function () {
  it("is true when first number is 10", function () {
    expect(makes10(10, 0)).toBe(true);
  });

  it("is true when second number is 10", function () {
    expect(makes10(3, 10)).toBe(true);
  });

  it("is true when sum is 10", function () {
    expect(makes10(7, 3)).toBe(true);
    expect(makes10(1, 9)).toBe(true);
  });

  it("is false when neither is 10 and sum is not 10", function () {
    expect(makes10(4, 4)).toBe(false);
    expect(makes10(0, 0)).toBe(false);
  });

  it("handles negative numbers in sum", function () {
    expect(makes10(-5, 15)).toBe(true);
    expect(makes10(-3, 12)).toBe(false);
  });
});

describe("near100", function () {
  it("is true well inside distance", function () {
    expect(near100(95, 10)).toBe(true);
    expect(near100(105, 10)).toBe(true);
  });

  it("is true exactly at lower boundary", function () {
    expect(near100(95, 5)).toBe(true);
  });

  it("is true exactly at upper boundary", function () {
    expect(near100(110, 10)).toBe(true);
  });

  it("is false just outside lower boundary", function () {
    expect(near100(94, 5)).toBe(false);
  });

  it("is false just outside upper boundary", function () {
    expect(near100(111, 10)).toBe(false);
  });

  it("is false when far from 100", function () {
    expect(near100(50, 10)).toBe(false);
    expect(near100(200, 20)).toBe(false);
  });
});

describe("isMultiple35", function () {
  it("is true for a multiple of 3 only", function () {
    expect(isMultiple35(3)).toBe(true);
    expect(isMultiple35(9)).toBe(true);
  });

  it("is true for a multiple of 5 only", function () {
    expect(isMultiple35(5)).toBe(true);
    expect(isMultiple35(20)).toBe(true);
  });

  it("is true for a multiple of both 3 and 5", function () {
    expect(isMultiple35(15)).toBe(true);
    expect(isMultiple35(30)).toBe(true);
  });

  it("is true for zero (multiple of any number)", function () {
    expect(isMultiple35(0)).toBe(true);
  });

  it("is false for a number not multiple of 3 or 5", function () {
    expect(isMultiple35(7)).toBe(false);
    expect(isMultiple35(11)).toBe(false);
  });

  it("works with negative numbers", function () {
    expect(isMultiple35(-3)).toBe(true);
    expect(isMultiple35(-10)).toBe(true);
    expect(isMultiple35(-7)).toBe(false);
  });
});

describe("shareLastDigit", function () {
  it("is true when both are one-digit and equal", function () {
    expect(shareLastDigit(7, 7)).toBe(true);
  });

  it("is true for multi-digit numbers sharing last digit", function () {
    expect(shareLastDigit(27, 7)).toBe(true);
    expect(shareLastDigit(123, 43)).toBe(true);
  });

  it("is false when last digits are different", function () {
    expect(shareLastDigit(10, 21)).toBe(false);
    expect(shareLastDigit(9, 20)).toBe(false);
  });

  it("works with zero as last digit", function () {
    expect(shareLastDigit(10, 20)).toBe(true);
    expect(shareLastDigit(30, 4)).toBe(false);
  });
});

describe("isColdAndHot", function () {
  it("is true when first is cold and second is hot", function () {
    expect(isColdAndHot(-5, 120)).toBe(true);
  });

  it("is true when first is hot and second is cold", function () {
    expect(isColdAndHot(150, -1)).toBe(true);
  });

  it("is false when both are normal range", function () {
    expect(isColdAndHot(10, 50)).toBe(false);
    expect(isColdAndHot(0, 100)).toBe(false);
  });

  it("is false when both are cold", function () {
    expect(isColdAndHot(-5, -10)).toBe(false);
    expect(isColdAndHot(-1, -100)).toBe(false);
  });

  it("is false when both are hot", function () {
    expect(isColdAndHot(150, 200)).toBe(false);
    expect(isColdAndHot(101, 150)).toBe(false);
  });

  it("checks edge temperatures around 0 and 100", function () {
    expect(isColdAndHot(0, 101)).toBe(false);
    expect(isColdAndHot(-1, 100)).toBe(false);
  });
});

describe("makeABBA", function () {
  it("builds ABBA from two normal words", function () {
    expect(makeABBA("Hi", "Bye")).toBe("HiByeByeHi");
    expect(makeABBA("Yo", "Alice")).toBe("YoAliceAliceYo");
  });

  it("works with single-character strings", function () {
    expect(makeABBA("a", "b")).toBe("abba");
  });

  it("works when first is empty", function () {
    expect(makeABBA("", "X")).toBe("XX");
  });

  it("works when second is empty", function () {
    expect(makeABBA("X", "")).toBe("XX");
  });

  it("works when both are empty", function () {
    expect(makeABBA("", "")).toBe("");
  });

  it("works with spaces and punctuation", function () {
    expect(makeABBA("Hi ", "There")).toBe("Hi ThereThereHi ");
    expect(makeABBA("!", "?")).toBe("!??!");
  });
});

describe("makeSLS", function () {
  it("puts shorter first string outside when first is shorter", function () {
    expect(makeSLS("Hi", "Hello")).toBe("HiHelloHi");
    expect(makeSLS("a", "abc")).toBe("aabca");
  });

  it("puts shorter second string outside when second is shorter", function () {
    expect(makeSLS("Puppy", "Dog")).toBe("DogPuppyDog");
    expect(makeSLS("Hello", "Yo")).toBe("YoHelloYo");
  });

  it("works with empty second string (first is longer)", function () {
    expect(makeSLS("Hi", "")).toBe("Hi");
  });

  it("works with empty first string (second is longer)", function () {
    expect(makeSLS("", "Hi")).toBe("Hi");
  });

  it("works with spaces and mixed characters", function () {
    expect(makeSLS(" ", "abc")).toBe(" abc ");
    expect(makeSLS("cat", " ")).toBe(" cat ");
  });
});

describe("canEnterClub", function () {
  it("returns 2 when you are very stylish", function () {
    expect(canEnterClub(9, 5)).toBe(2);
  });

  it("returns 2 when date is very stylish", function () {
    expect(canEnterClub(5, 8)).toBe(2);
  });

  it("returns 0 when you are very unstylish, even if date is stylish", function () {
    expect(canEnterClub(1, 5)).toBe(0);
    expect(canEnterClub(0, 9)).toBe(0);
  });

  it("returns 0 when date is very unstylish, even if you are stylish", function () {
    expect(canEnterClub(5, 2)).toBe(0);
    expect(canEnterClub(8, 1)).toBe(0);
  });

  it("returns 1 when both are in the middle range", function () {
    expect(canEnterClub(5, 5)).toBe(1);
    expect(canEnterClub(3, 7)).toBe(1);
  });

  it("checks edge ratings 2 and 8 exactly", function () {
    expect(canEnterClub(2, 8)).toBe(0);
    expect(canEnterClub(8, 2)).toBe(0);
    expect(canEnterClub(8, 3)).toBe(2);
    expect(canEnterClub(3, 8)).toBe(2);
  });
});

describe("shouldAnswerPhone", function () {
  it("answers when not morning and not asleep, any caller", function () {
    expect(shouldAnswerPhone(false, false, false)).toBe(true);
    expect(shouldAnswerPhone(false, true, false)).toBe(true);
  });

  it("answers in the morning only if boss and not asleep", function () {
    expect(shouldAnswerPhone(true, true, false)).toBe(true);
    expect(shouldAnswerPhone(true, false, false)).toBe(false);
  });

  it("never answers when asleep", function () {
    expect(shouldAnswerPhone(false, false, true)).toBe(false);
    expect(shouldAnswerPhone(false, true, true)).toBe(false);
    expect(shouldAnswerPhone(true, true, true)).toBe(false);
    expect(shouldAnswerPhone(true, false, true)).toBe(false);
  });
});
