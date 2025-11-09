 function TestFall() {
  return (
    <div>        
      <style>{`   
        @keyframes fall {   
          0%   { transform: translate3d(-50%, -10vh, 0); opacity: 1; }
          100% { transform: translate3d(-50%, 110vh, 0); opacity: 0; }
        }
        .animate-fall {
          animation: fall 4s linear forwards;
          position: fixed;
          top: 0;
          left: 50%;
          font-size: 3rem;
          color: gold;
        }
      `}</style>

      <span className="animate-fall">Wow!</span>
      
    </div>
  );
}
export default TestFall;

//keyframes is a regular part of css that controls how animations 
// change over time. so this stuff is not from tail wind or that 
//place you got the animation from, its just css. you can maje better ones in 
//tailwind . config la.
//its not a deocrator its an 'at rule' in css. special css instructions
//that start with @. like @import @media @keyframes