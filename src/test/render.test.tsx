// @vitest-environment jsdom
import { describe, it, expect, vi, beforeAll } from "vitest";
import { render } from "@testing-library/react";
import App from "../App";

// Mock window.scrollTo, matchMedia, and IntersectionObserver
beforeAll(() => {
  window.scrollTo = vi.fn();
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });

  class MockIntersectionObserver {
    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();
  }
  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    value: MockIntersectionObserver,
  });
  Object.defineProperty(global, 'IntersectionObserver', {
    writable: true,
    value: MockIntersectionObserver,
  });
});

describe("All Pages Render Verification", () => {
  const routes = [
    "/",
    "/about-us",
    "/services",
    "/services/dermatology-laser",
    "/services/nutrition-contouring",
    "/services/hair-restoration",
    "/dr-freehan",
    "/results",
    "/video-gallery",
    "/offers",
    "/booking",
    "/contact-us",
  ];

  routes.forEach((route) => {
    it(`renders route ${route} without crashing`, () => {
      window.history.pushState({}, "Test page", route);
      const { container } = render(<App />);
      expect(container).toBeDefined();
      expect(document.body.innerHTML.length).toBeGreaterThan(100);
    });
  });
});
