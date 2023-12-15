import { Stack, Typography } from "@mui/material";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <Stack sx={{ position: "fixed", left: 20, bottom: 20 }} gap={2}>
      <Stack
        component="a"
        href="https://github.com/Roman-Maksimov/christmas-tree"
        direction="row"
        alignItems="center"
        gap={2}
      >
        <svg
          height="24px"
          aria-hidden="true"
          viewBox="0 0 16 16"
          version="1.1"
          width="24px"
        >
          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
        </svg>

        <Typography variant="body2">
          https://github.com/Roman-Maksimov/christmas-tree
        </Typography>
      </Stack>

      <Stack
        component="a"
        href="https://blog.frontend-almanac.ru"
        direction="row"
        alignItems="center"
        gap={2}
      >
        <svg width="24px" height="24px" viewBox="0 0 256 256" version="1.1">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <circle id="Oval" fill="#F4D71A" cx="128" cy="128" r="128" />
            <path
              d="M59,144.44 L59,134.24 L40.82,128 L59,121.76 L59,111.56 L28.4,122.66 L28.4,133.34 L59,144.44 Z M79.88,149 L79.88,135.56 L97.4,135.56 L97.4,124.88 L79.88,124.88 L79.88,117.68 L99.86,117.68 L99.86,107 L65.72,107 L65.72,149 L79.88,149 Z M114.2,149 L117.02,141.68 L132.98,141.68 L135.8,149 L150.44,149 L132.08,107 L118.16,107 L99.8,149 L114.2,149 Z M129.08,131.48 L120.92,131.48 L125,120.92 L129.08,131.48 Z M176.9,155 L196.7,98.48 L184.7,98.48 L164.9,155 L176.9,155 Z M197,144.44 L227.6,133.34 L227.6,122.66 L197,111.56 L197,121.76 L215.18,128 L197,134.24 L197,144.44 Z"
              id="&lt;FA/&gt;"
              fill="#000000"
              fillRule="nonzero"
            />
          </g>
        </svg>

        <Typography variant="body2">
          [RU] https://blog.frontend-almanac.ru
        </Typography>
      </Stack>

      <Stack
        component="a"
        href="https://blog.frontend-almanac.com"
        direction="row"
        alignItems="center"
        gap={2}
      >
        <svg width="24px" height="24px" viewBox="0 0 256 256" version="1.1">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <circle id="Oval" fill="#F4D71A" cx="128" cy="128" r="128" />
            <path
              d="M59,144.44 L59,134.24 L40.82,128 L59,121.76 L59,111.56 L28.4,122.66 L28.4,133.34 L59,144.44 Z M79.88,149 L79.88,135.56 L97.4,135.56 L97.4,124.88 L79.88,124.88 L79.88,117.68 L99.86,117.68 L99.86,107 L65.72,107 L65.72,149 L79.88,149 Z M114.2,149 L117.02,141.68 L132.98,141.68 L135.8,149 L150.44,149 L132.08,107 L118.16,107 L99.8,149 L114.2,149 Z M129.08,131.48 L120.92,131.48 L125,120.92 L129.08,131.48 Z M176.9,155 L196.7,98.48 L184.7,98.48 L164.9,155 L176.9,155 Z M197,144.44 L227.6,133.34 L227.6,122.66 L197,111.56 L197,121.76 L215.18,128 L197,134.24 L197,144.44 Z"
              id="&lt;FA/&gt;"
              fill="#000000"
              fillRule="nonzero"
            />
          </g>
        </svg>

        <Typography variant="body2">
          [EN] https://blog.frontend-almanac.com
        </Typography>
      </Stack>
    </Stack>
  );
};
