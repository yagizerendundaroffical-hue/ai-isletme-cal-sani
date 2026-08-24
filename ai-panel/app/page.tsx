"use client";
import { useState } from "react";

export default function Home() {
	const [rapor, setRapor] = useState("");

	function calisaniCalistir() {
		setRapor("⚡ AI OPERASYONU: Tekrarlayan müşteri mesajları React altyapısı ile kontrol edildi ve yanıtlandı!");
	}

	return (
		<div style={{
			backgroundColor: "#121620",
			color: "#f1f5f9",
			fontFamily: "sans-serif",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			height: "100vh",
			margin: 0
		}}>
			<h1 style={{ color: "#38bdf8", fontSize: "42px", marginBottom: "10px" }}>
				AI İşletme Çalışanı SaaS Panel v1 🤖
			</h1>
			<p style={{ color: "#94a3b8", fontSize: "18px", marginBottom: "30px" }}>
				Geleceğin işletme otomasyon sistemine hoş geldin.
			</p>
      
			<button 
				onClick={calisaniCalistir}
				style={{
					backgroundColor: "#2563eb",
					color: "white",
					border: "none",
					padding: "12px 24px",
					fontSize: "16px",
					fontWeight: "bold",
					borderRadius: "8px",
					cursor: "pointer"
				}}
			>
				AI Çalışanını Başlat
			</button>

			{rapor && (
				<div style={{ marginTop: "20px", fontFamily: "monospace", color: "#10b981", fontWeight: "bold" }}>
					{rapor}
				</div>
			)}
		</div>
	);
}
