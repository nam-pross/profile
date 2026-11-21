export const projectDetails: Record<string, { focus: string; architecture: string[]; highlights: string[] }> = {
  'llm-news': { focus: 'Inside the module: article text to a traceable summary.', architecture: ['Evidence selection / TF-IDF + MMR', 'Prompt profiles / token budget', 'CPU inference / JSON result'], highlights: ['Vietnamese and English profiles: one-sentence or 3–4 sentence prompts', 'MMR evidence selection; direct source input for English normal mode', 'Local Qwen GGUF inference through CLI or a persistent llama.cpp server', 'JSON metadata for strategy, tokens, truncation, model version, and latency'] },
  news: { focus: 'Make long-form information easier to explore.', architecture: ['React interface', 'FastAPI services', 'Summarization research'], highlights: ['News-reading frontend', 'Vietnamese and English summary experiments', 'Local Qwen GGUF research workflow'] },
  stylio: { focus: 'Connect a mobile fashion experience with image-based AI experiments.', architecture: ['Expo mobile app', 'FastAPI image services', 'FASHN VTON integration'], highlights: ['Cross-platform mobile workspace', 'Image preparation and upload workflows', 'CPU, CUDA, and Colab experimentation'] },
  chess: { focus: 'Explore chess through interactive web interfaces.', architecture: ['React chess interface', 'Backend workspace', 'Browser extension'], highlights: ['chess.js and react-chessboard integration', 'ONNX Runtime Web dependency', 'Multilingual interface dependencies'] },
  cab: { focus: 'Model the services that support a ride-booking journey.', architecture: ['API gateway', 'Domain services', 'Docker configuration'], highlights: ['Separate booking, driver, and trip services', 'Authentication and customer service boundaries', 'Payment and notification service structure'] },
  analyzer: { focus: 'Bring chess-position inspection into a browser workflow.', architecture: ['Board capture', 'Python server', 'Stockfish engine'], highlights: ['Documented shared-window board detection', 'Browser and Windows desktop entry points', 'Docker deployment configuration'] },
}

export const llmNewsModules = [
  { name: 'Evidence selection', entry: 'notebook_pipeline.py · select_source / evidence_mmr', description: 'Splits articles into sentences, scores relevance with character TF-IDF, and uses MMR to reduce repeated information. Selected sentences retain their original order. English normal mode uses the source directly.' },
  { name: 'Prompt & token control', entry: 'app.py · messages_for / fit_prompt', description: 'Chooses Vietnamese or English instructions and a one-sentence or 3–4 sentence target. Counts tokens with the GGUF tokenizer and trims source content when the prompt exceeds its budget.' },
  { name: 'Local inference', entry: 'app.py · DirectClient / LocalClient', description: 'Runs Qwen2.5-3B-Instruct Q4_K_M on CPU through llama.cpp. Direct mode starts a local process per request; connected mode reuses a model server held in memory.' },
  { name: 'Result & validation', entry: 'app.py · summarize', description: 'Validates inputs, rejects empty outputs and obvious Chinese-language drift, then returns generated_summary with profile, strategy, token counts, truncation flags, and latency. These checks do not establish factual accuracy.' },
]

// Deliberately fictional links requested for the portfolio scaffold.
// Replace with verified production URLs before publishing.
export const placeholderDemoUrl = (id: string) => `https://example.com/demo/${id}`
