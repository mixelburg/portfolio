"use client";

import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Box, CircularProgress, Typography } from "@mui/material";
import { forwardRef, useEffect, useState } from "react";

const float = keyframes`
  0%, 100% {
    transform: translateY(4px);
  }
  50% {
    transform: translateY(-16px);
  }
`;

const EthCardInner = styled.div`
  width: 100%;
  height: 100%;
  max-height: 400px;
  border-radius: 22px;
  position: relative;
  overflow: hidden;
  display: grid;
  place-items: center;
  color: #fff;
  background: radial-gradient(
      120% 120% at 20% 0%,
      rgba(255, 255, 255, 0.08),
      transparent 55%
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.06),
      rgba(255, 255, 255, 0.02)
    );

  &::before {
    content: "";
    position: absolute;
    inset: -60px;
    background: radial-gradient(
        circle at 30% 20%,
        rgba(120, 170, 255, 0.22),
        transparent 45%
      ),
      radial-gradient(
        circle at 70% 80%,
        rgba(160, 90, 255, 0.18),
        transparent 50%
      );
    filter: blur(18px);
    opacity: 0.55;
    transition: opacity 220ms ease;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.12),
      transparent 40%
    );
    opacity: 0.55;
    pointer-events: none;
  }

  .eth-icon {
    height: 62%;
    position: absolute;
    z-index: 1;
    opacity: 0.92;
    transform: translateY(2px) scale(1);
    transition:
      transform 260ms cubic-bezier(0.2, 0.8, 0.2, 1),
      opacity 260ms ease,
      filter 260ms ease;
    will-change: transform;
  }

  .text-box {
    z-index: 2;
    width: 100%;
    padding: 18px 18px 16px;
    display: grid;
    gap: 10px;
    justify-items: center;
    opacity: 0;
    transform: translateY(10px);
    transition:
      opacity 200ms ease,
      transform 260ms cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  &:hover::before,
  &:focus-visible::before {
    opacity: 0.85;
  }

  &:hover .text-box,
  &:focus-visible .text-box {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover .eth-icon,
  &:focus-visible .eth-icon {
    transform: translateY(-10px) scale(1.04);
    opacity: 0.35;
    filter: blur(2px);
    animation: ${float} 2.4s ease-in-out infinite;
  }
`;

export const EthCard = forwardRef<HTMLDivElement>((_, _ref) => {
  const [price, setPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFromBinance = async (): Promise<number> => {
      const response = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT");
      if (!response.ok) throw new Error("Binance API failed");
      const data = await response.json();
      return parseFloat(data.price);
    };

    const fetchFromKraken = async (): Promise<number> => {
      const response = await fetch("https://api.kraken.com/0/public/Ticker?pair=ETHUSD");
      if (!response.ok) throw new Error("Kraken API failed");
      const data = await response.json();
      return parseFloat(data.result.XETHZUSD.c[0]);
    };

    const fetchPrice = async () => {
      try {
        const ethPrice = await fetchFromBinance();
        setPrice(ethPrice);
      } catch {
        try {
          const ethPrice = await fetchFromKraken();
          setPrice(ethPrice);
        } catch (error) {
          console.error("Failed to fetch ETH price from all sources:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 60000);
    return () => clearInterval(interval);
  }, []);

  const formatPrice = (value: number) => {
    return value.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <EthCardInner className="cursor-target">
      <svg
        className="eth-icon"
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width="100%"
        height="100%"
        version="1.1"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 784.37 1277.39"
        role="img"
        aria-labelledby="eth-icon-title"
      >
        <title id="eth-icon-title">Ethereum Logo</title>
        <g id="Layer_x0020_1">
          <g id="_1421394342400">
            <g>
              <polygon
                fill="#343434"
                fillRule="nonzero"
                points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54"
              />
              <polygon fill="#8C8C8C" fillRule="nonzero" points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33" />
              <polygon
                fill="#3C3C3B"
                fillRule="nonzero"
                points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89"
              />
              <polygon fill="#8C8C8C" fillRule="nonzero" points="392.07,1277.38 392.07,956.52 -0,724.89" />
              <polygon fill="#141414" fillRule="nonzero" points="392.07,882.29 784.13,650.54 392.07,472.33" />
              <polygon fill="#393939" fillRule="nonzero" points="0,650.54 392.07,882.29 392.07,472.33" />
            </g>
          </g>
        </g>
      </svg>
      <Box className="text-box">
        <Typography variant="h6" sx={{ m: 0, fontSize: 22, letterSpacing: "0.2px" }}>
          Ethereum
        </Typography>
        <Typography
          variant="caption"
          sx={{
            fontSize: 12,
            color: "rgba(255, 255, 255, 0.42)",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          Cryptocurrency
        </Typography>
        <Typography
          variant="h6"
          sx={{
            m: 0,
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.2px",
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          {loading ? (
            <CircularProgress size={20} sx={{ color: "rgba(255, 255, 255, 0.7)" }} />
          ) : price ? (
            <>
              <Box component="span" sx={{ fontSize: 14, opacity: 0.85, mr: 0.25 }}>
                $
              </Box>
              {formatPrice(price)}
            </>
          ) : (
            "—"
          )}
        </Typography>
      </Box>
    </EthCardInner>
  );
});

export default EthCard;
