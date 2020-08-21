import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchBuggles as mockFetchBuggles} from '../api/fetchBuggles'
import { act } from 'react-dom/test-utils';
//mock the api axio call file
jest.mock('../api/fetchBuggles')
// as mockFetchBuggles
test("Fetches data and renders the bubbles", async () => {
  //mock data
  mockFetchBuggles.mockResolvedValueOnce(mockBubblesData)
  //render component
  render(<BubblePage />)

  screen.debug()
  //get the heading of the test
  const bubbleHeading = screen.getByRole('heading', { name: /Bubble Page/i })
  const colorListHeading = screen.getByRole('heading', { name: /colors/i })
  const bubblesHeading = screen.getByRole('heading', { name: /bubbles/i })

  expect(bubbleHeading).toHaveTextContent(/Bubble Page/i)
  expect(colorListHeading).toHaveTextContent(/colors/i)
  expect(bubblesHeading).toHaveTextContent(/bubbles/i)
  screen.debug()

})

const mockBubblesData = [
    {
      color: "aliceblue",
      code: {
        hex: "#f0f8ff"
      },
      id: 1
    },
    {
      color: "limegreen",
      code: {
        hex: "#99ddbc"
      },
      id: 2
    },
    {
      color: "aqua",
      code: {
        hex: "#00ffff"
      },
      id: 3
    },
    {
      color: "aquamarine",
      code: {
        hex: "#7fffd4"
      },
      id: 4
    },
    {
      color: "lilac",
      code: {
        hex: "#9a99dd"
      },
      id: 5
    },
    {
      color: "softpink",
      code: {
        hex: "#dd99ba"
      },
      id: 6
    },
    {
      color: "bisque",
      code: {
        hex: "#dd9a99"
      },
      id: 7
    },
    {
      color: "softyellow",
      code: {
        hex: "#dcdd99"
      },
      id: 8
    },
    {
      color: "blanchedalmond",
      code: {
        hex: "#ffebcd"
      },
      id: 9
    },
    {
      color: "blue",
      code: {
        hex: "#6093ca"
      },
      id: 10
    },
    {
      color: "blueviolet",
      code: {
        hex: "#8a2be2"
      },
      id: 11
    }
  ]
