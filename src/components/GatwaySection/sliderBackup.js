.wrapper {
    position: relative;
    transition: background-image 0.5s ease-in-out;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    padding: 60px 0;
}

.wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6));
    z-index: 1;
}

.safari.container {
    position: relative;
    z-index: 2;
}

.safari-btn {
    background: #18335D;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    transition: background 0.3s ease;
}

.safari-btn:hover {
    background: #142945;
}

.safari-card {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    min-height: 160px;
    transition: transform 0.3s ease;
}

.safari-card:hover {
    transform: translateY(-5px);
}

.safari-card .count {
    font-weight: bold;
    color: #18335D;
    font-size: 24px;
}

.safari-card .title {
    font-size: 18px;
    font-weight: 600;
    margin: 5px 0;
}

.safari-card .info {
    font-size: 14px;
    color: #555;
}

/* Custom Arrow Styles */
.arrow {
    background: #18335D;
    color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -40px;
    z-index: 2;
    cursor: pointer;
}

.next-arrow {
    right: 0;
}

.prev-arrow {
    right: 50px;
}

.arrow.disabled {
    opacity: 0.3;
    pointer-events: none;
}








/* style  */
.wrapper {
    position: relative;
    transition: background-image 0.5s ease-in-out;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    padding: 60px 0;
}

.wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6));
    z-index: 1;
}

.safari.container {
    position: relative;
    z-index: 2;
}

.safari-btn {
    background: #18335D;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    transition: background 0.3s ease;
}

.safari-btn:hover {
    background: #142945;
}

.safari-card {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    min-height: 160px;
    transition: transform 0.3s ease;
}

.safari-card:hover {
    transform: translateY(-5px);
}

.safari-card .count {
    font-weight: bold;
    color: #18335D;
    font-size: 24px;
}

.safari-card .title {
    font-size: 18px;
    font-weight: 600;
    margin: 5px 0;
}

.safari-card .info {
    font-size: 14px;
    color: #555;
}

/* Custom Arrow Styles */
.arrow {
    background: #18335D;
    color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -40px;
    z-index: 2;
    cursor: pointer;
}

.next-arrow {
    right: 0;
}

.prev-arrow {
    right: 50px;
}

.arrow.disabled {
    opacity: 0.3;
    pointer-events: none;
}
