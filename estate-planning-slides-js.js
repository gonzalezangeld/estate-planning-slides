const slides = [
    {
        content: `
            <h1>ATTN: Financial Advisors</h1>
            <p>Need a hot topic for your marketing?</p>
        `,
        wordCount: 9
    },
    {
        content: `
            <h2>We analyzed:</h2>
            <ul>
                <li>250+ million data points</li>
                <li>600,000+ campaigns</li>
                <li>10,000 financial advisors in the US</li>
            </ul>
            <p style="font-size: 24px; font-weight: bold; color: #4a90e2;">Guess the top performing campaign topic in 2023?</p>
        `,
        wordCount: 37
    },
    {
        content: `
            <h2 class="highlight">Estate Planning</h2>
            <p>Right behind "taxes" as one of the highest performing campaign topics.</p>
            <div style="width: 80px; height: 4px; background-color: #ffd700; margin: 20px auto;"></div>
            <p>A top concern for high-net-worth individuals.</p>
        `,
        wordCount: 27
    },
    {
        content: `
            <h2>We asked advisors:</h2>
            <p style="font-style: italic;">"Which content categories do you want more of?"</p>
            <div style="background-color: #4a90e2; color: white; padding: 20px; border-radius: 10px;">
                <p style="font-size: 40px; font-weight: bold;">52.1%</p>
                <p>said "estate planning"</p>
            </div>
        `,
        wordCount: 28
    },
    {
        content: `
            <h2>We teamed up with:</h2>
            <div style="font-size: 40px; font-weight: bold; color: #4a90e2; margin-bottom: 30px;">Trust & Will</div>
            <p>Helping 12,000+ financial advisors streamline estate planning and uncover opportunities.</p>
        `,
        wordCount: 29
    },
    {
        content: `
            <h2>New Content:</h2>
            <div style="background-color: #f0f0f0; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                <p style="font-size: 24px; font-weight: bold; color: #4a90e2; margin-bottom: 10px;">"The Role of a Power of Attorney"</p>
                <p>Single Email Campaign</p>
            </div>
            <p>Essential details about Power of Attorney (POA) responsibilities.</p>
        `,
        wordCount: 45
    },
    {
        content: `
            <h2>Visual Insights Newsletter</h2>
            <div style="background-color: #f0f0f0; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                <p style="font-size: 24px; font-weight: bold; color: #4a90e2; margin-bottom: 10px;">"Estate Planning Mistakes & How to Avoid Them"</p>
            </div>
            <p>Compelling insights on avoiding common estate planning pitfalls.</p>
        `,
        wordCount: 35
    },
    {
        content: `
            <h2>Coming Soon</h2>
            <ul>
                <li>More Estate Planning content</li>
                <li>Lead generation campaign</li>
            </ul>
        `,
        wordCount: 18
    },
    {
        content: `
            <h2>Ready to elevate your marketing?</h2>
            <div class="cta-button">Learn more about the Marketing Hub</div>
        `,
        wordCount: 13
    }
];

let currentSlide = 0;
const totalWords = slides.reduce((sum, slide) => sum + slide.wordCount, 0);

function updateSlide() {
    const slideElement = document.getElementById('slide');
    slideElement.innerHTML = slides[currentSlide].content;
    
    const wordsLeft = totalWords - slides.slice(0, currentSlide + 1).reduce((sum, slide) => sum + slide.wordCount, 0);
    const wordsLeftElement = document.createElement('div');
    wordsLeftElement.className = 'words-left';
    wordsLeftElement.textContent = `${wordsLeft} words left`;
    slideElement.appendChild(wordsLeftElement);

    document.getElementById('slideCounter').textContent = `${currentSlide + 1} / ${slides.length}`;
}

document.getElementById('prevButton').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
});

document.getElementById('nextButton').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
});

updateSlide();
