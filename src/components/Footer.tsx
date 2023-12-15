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
        href="https://t.me/frontend_almanac_ru"
        direction="row"
        alignItems="center"
        gap={2}
      >
        <svg width="24px" height="24px" viewBox="0 0 240.1 240.1">
          <linearGradient
            id="Oval_1_"
            gradientUnits="userSpaceOnUse"
            x1="-838.041"
            y1="660.581"
            x2="-838.041"
            y2="660.3427"
            gradientTransform="matrix(1000 0 0 -1000 838161 660581)"
          >
            <stop offset="0" style={{ stopColor: "#2AABEE" }} />
            <stop offset="1" style={{ stopColor: "#229ED9" }} />
          </linearGradient>
          <circle
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#Oval_1_)"
            cx="120.1"
            cy="120.1"
            r="120.1"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#FFFFFF"
            d="M54.3,118.8c35-15.2,58.3-25.3,70-30.2 c33.3-13.9,40.3-16.3,44.8-16.4c1,0,3.2,0.2,4.7,1.4c1.2,1,1.5,2.3,1.7,3.3s0.4,3.1,0.2,4.7c-1.8,19-9.6,65.1-13.6,86.3 c-1.7,9-5,12-8.2,12.3c-7,0.6-12.3-4.6-19-9c-10.6-6.9-16.5-11.2-26.8-18c-11.9-7.8-4.2-12.1,2.6-19.1c1.8-1.8,32.5-29.8,33.1-32.3 c0.1-0.3,0.1-1.5-0.6-2.1c-0.7-0.6-1.7-0.4-2.5-0.2c-1.1,0.2-17.9,11.4-50.6,33.5c-4.8,3.3-9.1,4.9-13,4.8 c-4.3-0.1-12.5-2.4-18.7-4.4c-7.5-2.4-13.5-3.7-13-7.9C45.7,123.3,48.7,121.1,54.3,118.8z"
          />
        </svg>

        <Typography variant="body2">
          [RU] https://t.me/frontend_almanac_ru
        </Typography>
      </Stack>

      <Stack
        component="a"
        href="https://t.me/frontend_almanac"
        direction="row"
        alignItems="center"
        gap={2}
      >
        <svg width="24px" height="24px" viewBox="0 0 240.1 240.1">
          <linearGradient
            id="Oval_1_"
            gradientUnits="userSpaceOnUse"
            x1="-838.041"
            y1="660.581"
            x2="-838.041"
            y2="660.3427"
            gradientTransform="matrix(1000 0 0 -1000 838161 660581)"
          >
            <stop offset="0" style={{ stopColor: "#2AABEE" }} />
            <stop offset="1" style={{ stopColor: "#229ED9" }} />
          </linearGradient>
          <circle
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#Oval_1_)"
            cx="120.1"
            cy="120.1"
            r="120.1"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#FFFFFF"
            d="M54.3,118.8c35-15.2,58.3-25.3,70-30.2 c33.3-13.9,40.3-16.3,44.8-16.4c1,0,3.2,0.2,4.7,1.4c1.2,1,1.5,2.3,1.7,3.3s0.4,3.1,0.2,4.7c-1.8,19-9.6,65.1-13.6,86.3 c-1.7,9-5,12-8.2,12.3c-7,0.6-12.3-4.6-19-9c-10.6-6.9-16.5-11.2-26.8-18c-11.9-7.8-4.2-12.1,2.6-19.1c1.8-1.8,32.5-29.8,33.1-32.3 c0.1-0.3,0.1-1.5-0.6-2.1c-0.7-0.6-1.7-0.4-2.5-0.2c-1.1,0.2-17.9,11.4-50.6,33.5c-4.8,3.3-9.1,4.9-13,4.8 c-4.3-0.1-12.5-2.4-18.7-4.4c-7.5-2.4-13.5-3.7-13-7.9C45.7,123.3,48.7,121.1,54.3,118.8z"
          />
        </svg>

        <Typography variant="body2">
          [EN] https://t.me/frontend_almanac
        </Typography>
      </Stack>
    </Stack>
  );
};
