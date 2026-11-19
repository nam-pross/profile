export const projectDetails: Record<string, { focus: string; architecture: string[]; highlights: string[] }> = {
  news: { focus: 'Make long-form information easier to explore.', architecture: ['React interface', 'FastAPI services', 'Summarization research'], highlights: ['News-reading frontend', 'Vietnamese and English summary experiments', 'Local Qwen GGUF research workflow'] },
  stylio: { focus: 'Connect a mobile fashion experience with image-based AI experiments.', architecture: ['Expo mobile app', 'FastAPI image services', 'FASHN VTON integration'], highlights: ['Cross-platform mobile workspace', 'Image preparation and upload workflows', 'CPU, CUDA, and Colab experimentation'] },
  chess: { focus: 'Explore chess through interactive web interfaces.', architecture: ['React chess interface', 'Backend workspace', 'Browser extension'], highlights: ['chess.js and react-chessboard integration', 'ONNX Runtime Web dependency', 'Multilingual interface dependencies'] },
  cab: { focus: 'Model the services that support a ride-booking journey.', architecture: ['API gateway', 'Domain services', 'Docker configuration'], highlights: ['Separate booking, driver, and trip services', 'Authentication and customer service boundaries', 'Payment and notification service structure'] },
  analyzer: { focus: 'Bring chess-position inspection into a browser workflow.', architecture: ['Board capture', 'Python server', 'Stockfish engine'], highlights: ['Documented shared-window board detection', 'Browser and Windows desktop entry points', 'Docker deployment configuration'] },
}

// Deliberately fictional links requested for the portfolio scaffold.
// Replace with verified production URLs before publishing.
export const placeholderDemoUrl = (id: string) => `https://example.com/demo/${id}`
