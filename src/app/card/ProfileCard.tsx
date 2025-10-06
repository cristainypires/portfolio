"use client";
import React, { useRef, useCallback, useEffect, useMemo } from "react";
import "./ProfileCard.css";

interface ProfileCardProps {
  avatarUrl?: string;
  miniAvatarUrl?: string;
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  showUserInfo?: boolean;
  enableTilt?: boolean;
  enableMobileTilt?: boolean;
  onContactClick?: () => void;
}

const clamp = (value: number, min = 0, max = 100) => Math.min(Math.max(value, min), max);
const round = (value: number, precision = 3) => parseFloat(value.toFixed(precision));
const adjust = (value: number, fromMin: number, fromMax: number, toMin: number, toMax: number) =>
  round(toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin));
const easeInOutCubic = (x: number) =>
  x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl = "/default-avatar.png",
  miniAvatarUrl,
  name = "Papitoz",
  title = "Developer",
  handle = "@papitoz",
  status = "Online",
  contactText = "Contact Me",
  showUserInfo = true,
  enableTilt = true,
  enableMobileTilt = false,
  onContactClick,
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  let rafId: number;

  const updateCard = useCallback((offsetX: number, offsetY: number) => {
    if (!wrapRef.current) return;
    const wrap = wrapRef.current;
    const card = cardRef.current!;
    const width = card.clientWidth;
    const height = card.clientHeight;
    const percentX = clamp((100 / width) * offsetX);
    const percentY = clamp((100 / height) * offsetY);
    const centerX = percentX - 50;
    const centerY = percentY - 50;

    const props = {
      "--pointer-x": `${percentX}%`,
      "--pointer-y": `${percentY}%`,
      "--background-x": `${adjust(percentX, 0, 100, 35, 65)}%`,
      "--background-y": `${adjust(percentY, 0, 100, 35, 65)}%`,
      "--pointer-from-center": `${clamp(Math.hypot(percentX - 50, percentY - 50) / 50, 0, 1)}`,
      "--pointer-from-top": `${percentY / 100}`,
      "--pointer-from-left": `${percentX / 100}`,
      "--rotate-x": `${round(-(centerX / 5))}deg`,
      "--rotate-y": `${round(centerY / 4)}deg`,
    } as React.CSSProperties;

    Object.entries(props).forEach(([k, v]) => wrap.style.setProperty(k, v as string));
  }, []);

  const handleMove = useCallback((e: PointerEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    updateCard(e.clientX - rect.left, e.clientY - rect.top);
  }, [updateCard]);

  useEffect(() => {
    if (!enableTilt) return;
    const card = cardRef.current!;
    const wrap = wrapRef.current!;

    card.addEventListener("pointermove", handleMove);
    return () => card.removeEventListener("pointermove", handleMove);
  }, [enableTilt, handleMove]);

  return (
    <div className="bg-[#L1MJ]">
    <div ref={wrapRef} className="pc-card-wrapper ">
      <div
        ref={cardRef}
        className="pc-card"
        style={{
          "--behind-gradient": "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y), #fff5 0%, #0000 80%)",
          "--inner-gradient": "linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)",
        } as React.CSSProperties}
      >
        <div className="pc-shine" />
        <div className="pc-avatar-content">
          <img src={avatarUrl} className="avatar" />
        </div>
        {showUserInfo && (
          <div className="pc-user-info">
            <div className="pc-user-details">
              <div className="pc-mini-avatar">
                <img src={miniAvatarUrl} />
              </div>
              
            </div>
            <button
  className="pc-contact-btn"
  onClick={() => {
    const contatoSection = document.getElementById("contato");
    if (contatoSection) {
      contatoSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  {contactText}
</button>

          </div>
        )}
        <div className="pc-content pc-details">
          <h3>{name}</h3>
          <p>{title}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProfileCard;
