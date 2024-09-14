const year = new Date().getFullYear();

export default function Footer() {
    return (
        <div>
            <p>Copyright © {year}. All rights reserved.</p>
        </div>
    );
}
