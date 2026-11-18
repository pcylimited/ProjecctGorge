var e=1e3,t=1001,n=1002,r=1003,i=1006,a=1008,o=1009,s=1012,c=1014,l=1015,u=1016,d=1017,f=1018,p=1020,m=1023,h=1026,g=1027,_=1029,v=1030,y=1031,b=1033,x=2300,S=2301,C=2302,w=2303,T=2400,E=2401,D=2402,O=`srgb`,k=`srgb-linear`,A=`linear`,j=`srgb`,M=7680,N=35048,P=2e3;function ee(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function F(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function I(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function te(){let e=I(`canvas`);return e.style.display=`block`,e}var L={};function ne(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function re(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function R(...e){e=re(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function z(...e){e=re(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function B(...e){let t=e.join(` `);t in L||(L[t]=!0,R(...e))}function ie(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var ae={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},oe=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},se=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ce=Math.PI/180,le=180/Math.PI;function V(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(se[e&255]+se[e>>8&255]+se[e>>16&255]+se[e>>24&255]+`-`+se[t&255]+se[t>>8&255]+`-`+se[t>>16&15|64]+se[t>>24&255]+`-`+se[n&63|128]+se[n>>8&255]+`-`+se[n>>16&255]+se[n>>24&255]+se[r&255]+se[r>>8&255]+se[r>>16&255]+se[r>>24&255]).toLowerCase()}function H(e,t,n){return Math.max(t,Math.min(n,e))}function ue(e,t){return(e%t+t)%t}function de(e,t,n){return(1-n)*e+n*t}function fe(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function pe(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function me(e,t){if(t.constructor===Float32Array)return e;let n=pe(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function he(e,t){if(t.constructor===Float32Array)return e;let n=pe(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var U=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=H(this.x,e.x,t.x),this.y=H(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=H(this.x,e,t),this.y=H(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(H(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(H(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ge=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:R(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(H(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ve.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ve.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=H(this.x,e.x,t.x),this.y=H(this.y,e.y,t.y),this.z=H(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=H(this.x,e,t),this.y=H(this.y,e,t),this.z=H(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(H(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _e.copy(this).projectOnVector(e),this.sub(_e)}reflect(e){return this.sub(_e.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(H(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_e=new W,ve=new ge,G=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return B(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(ye.makeScale(e,t)),this}rotate(e){return B(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(ye.makeRotation(-e)),this}translate(e,t){return B(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(ye.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ye=new G,be=new G().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xe=new G().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Se(){let e={enabled:!0,workingColorSpace:k,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=we(e.r),e.g=we(e.g),e.b=we(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Te(e.r),e.g=Te(e.g),e.b=Te(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?A:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[k]:{primaries:t,whitePoint:r,transfer:A,toXYZ:be,fromXYZ:xe,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:O},outputColorSpaceConfig:{drawingBufferColorSpace:O}},[O]:{primaries:t,whitePoint:r,transfer:j,toXYZ:be,fromXYZ:xe,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:O}}}),e}var Ce=Se();function we(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Te(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ee,De=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ee===void 0&&(Ee=I(`canvas`)),Ee.width=e.width,Ee.height=e.height;let t=Ee.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Ee}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=I(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=we(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(we(t[e]/255)*255):t[e]=we(t[e]);return{data:t,width:e.width,height:e.height}}return R(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Oe=0,ke=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Oe++}),this.uuid=V(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Ae(r[t].image)):e.push(Ae(r[t]))}else e=Ae(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Ae(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?De.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(R(`Texture: Unable to serialize Texture.`),{})}var je=0,Me=new W,K=class r extends oe{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,s=t,c=t,l=i,u=a,d=m,f=o,p=r.DEFAULT_ANISOTROPY,h=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:je++}),this.uuid=V(),this.name=``,this.source=new ke(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=c,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new U(0,0),this.repeat=new U(1,1),this.center=new U(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new G,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Me).x}get height(){return this.source.getSize(Me).y}get depth(){return this.source.getSize(Me).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){R(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};K.DEFAULT_IMAGE=null,K.DEFAULT_MAPPING=300,K.DEFAULT_ANISOTROPY=1;var Ne=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=H(this.x,e.x,t.x),this.y=H(this.y,e.y,t.y),this.z=H(this.z,e.z,t.z),this.w=H(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=H(this.x,e,t),this.y=H(this.y,e,t),this.z=H(this.z,e,t),this.w=H(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(H(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pe=class extends oe{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:i,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ne(0,0,e,t),this.scissorTest=!1,this.viewport=new Ne(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new K({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:i,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new ke(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Fe=class extends Pe{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ie=class extends K{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Le=class extends K{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Re=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/q.setFromMatrixColumn(e,0).length(),i=1/q.setFromMatrixColumn(e,1).length(),a=1/q.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(J,e,Be)}lookAt(e,t,n){let r=this.elements;return Ue.subVectors(e,t),Ue.lengthSq()===0&&(Ue.z=1),Ue.normalize(),Ve.crossVectors(n,Ue),Ve.lengthSq()===0&&(Math.abs(n.z)===1?Ue.x+=1e-4:Ue.z+=1e-4,Ue.normalize(),Ve.crossVectors(n,Ue)),Ve.normalize(),He.crossVectors(Ue,Ve),r[0]=Ve.x,r[4]=He.x,r[8]=Ue.x,r[1]=Ve.y,r[5]=He.y,r[9]=Ue.y,r[2]=Ve.z,r[6]=He.z,r[10]=Ue.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],ee=r[11],F=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*ee,i[12]=a*w+o*O+s*M+c*F,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*ee,i[13]=l*w+u*O+d*M+f*F,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*ee,i[14]=p*w+m*O+h*M+g*F,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*ee,i[15]=_*w+v*O+y*M+b*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=q.set(r[0],r[1],r[2]).length(),o=q.set(r[4],r[5],r[6]).length(),s=q.set(r[8],r[9],r[10]).length();i<0&&(a=-a),ze.copy(this);let c=1/a,l=1/o,u=1/s;return ze.elements[0]*=c,ze.elements[1]*=c,ze.elements[2]*=c,ze.elements[4]*=l,ze.elements[5]*=l,ze.elements[6]*=l,ze.elements[8]*=u,ze.elements[9]*=u,ze.elements[10]*=u,t.setFromRotationMatrix(ze),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=P,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=P,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},q=new W,ze=new Re,J=new W(0,0,0),Be=new W(1,1,1),Ve=new W,He=new W,Ue=new W,We=new Re,Ge=new ge,Ke=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(H(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-H(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(H(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-H(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(H(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-H(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:R(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return We.makeRotationFromQuaternion(e),this.setFromRotationMatrix(We,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ge.setFromEuler(this),this.setFromQuaternion(Ge,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ke.DEFAULT_ORDER=`XYZ`;var qe=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Je=0,Ye=new W,Xe=new ge,Ze=new Re,Qe=new W,$e=new W,et=new W,tt=new ge,nt=new W(1,0,0),rt=new W(0,1,0),it=new W(0,0,1),at={type:`added`},ot={type:`removed`},st={type:`childadded`,child:null},ct={type:`childremoved`,child:null},lt=class e extends oe{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Je++}),this.uuid=V(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new W,n=new Ke,r=new ge,i=new W(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Re},normalMatrix:{value:new G}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qe,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xe.setFromAxisAngle(e,t),this.quaternion.multiply(Xe),this}rotateOnWorldAxis(e,t){return Xe.setFromAxisAngle(e,t),this.quaternion.premultiply(Xe),this}rotateX(e){return this.rotateOnAxis(nt,e)}rotateY(e){return this.rotateOnAxis(rt,e)}rotateZ(e){return this.rotateOnAxis(it,e)}translateOnAxis(e,t){return Ye.copy(e).applyQuaternion(this.quaternion),this.position.add(Ye.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nt,e)}translateY(e){return this.translateOnAxis(rt,e)}translateZ(e){return this.translateOnAxis(it,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ze.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qe.copy(e):Qe.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),$e.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ze.lookAt($e,Qe,this.up):Ze.lookAt(Qe,$e,this.up),this.quaternion.setFromRotationMatrix(Ze),r&&(Ze.extractRotation(r.matrixWorld),Xe.setFromRotationMatrix(Ze),this.quaternion.premultiply(Xe.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(z(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(at),st.child=e,this.dispatchEvent(st),st.child=null):z(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ot),ct.child=e,this.dispatchEvent(ct),ct.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ze.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ze.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ze),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(at),st.child=e,this.dispatchEvent(st),st.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($e,e,et),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($e,tt,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};lt.DEFAULT_UP=new W(0,1,0),lt.DEFAULT_MATRIX_AUTO_UPDATE=!0,lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ut=class extends lt{constructor(){super(),this.isGroup=!0,this.type=`Group`}},dt={type:`move`},ft=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dt)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ut;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},pt={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mt={h:0,s:0,l:0},ht={h:0,s:0,l:0};function gt(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var _t=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=O){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ce.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ce.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ce.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ce.workingColorSpace){if(e=ue(e,1),t=H(t,0,1),n=H(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=gt(i,r,e+1/3),this.g=gt(i,r,e),this.b=gt(i,r,e-1/3)}return Ce.colorSpaceToWorking(this,r),this}setStyle(e,t=O){function n(t){t!==void 0&&parseFloat(t)<1&&R(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:R(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);R(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=O){let n=pt[e.toLowerCase()];return n===void 0?R(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=we(e.r),this.g=we(e.g),this.b=we(e.b),this}copyLinearToSRGB(e){return this.r=Te(e.r),this.g=Te(e.g),this.b=Te(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=O){return Ce.workingToColorSpace(vt.copy(this),e),Math.round(H(vt.r*255,0,255))*65536+Math.round(H(vt.g*255,0,255))*256+Math.round(H(vt.b*255,0,255))}getHexString(e=O){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ce.workingColorSpace){Ce.workingToColorSpace(vt.copy(this),t);let n=vt.r,r=vt.g,i=vt.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Ce.workingColorSpace){return Ce.workingToColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=O){Ce.workingToColorSpace(vt.copy(this),e);let t=vt.r,n=vt.g,r=vt.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(mt),this.setHSL(mt.h+e,mt.s+t,mt.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mt),e.getHSL(ht);let n=de(mt.h,ht.h,t),r=de(mt.s,ht.s,t),i=de(mt.l,ht.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vt=new _t;_t.NAMES=pt;var yt=class extends lt{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ke,this.environmentIntensity=1,this.environmentRotation=new Ke,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},bt=new W,xt=new W,St=new W,Ct=new W,wt=new W,Tt=new W,Et=new W,Dt=new W,Ot=new W,kt=new W,At=new Ne,jt=new Ne,Mt=new Ne,Nt=class e{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),bt.subVectors(e,t),r.cross(bt);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){bt.subVectors(r,t),xt.subVectors(n,t),St.subVectors(e,t);let a=bt.dot(bt),o=bt.dot(xt),s=bt.dot(St),c=xt.dot(xt),l=xt.dot(St),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ct)!==null&&Ct.x>=0&&Ct.y>=0&&Ct.x+Ct.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Ct)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Ct.x),s.addScaledVector(a,Ct.y),s.addScaledVector(o,Ct.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return At.setScalar(0),jt.setScalar(0),Mt.setScalar(0),At.fromBufferAttribute(e,t),jt.fromBufferAttribute(e,n),Mt.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(At,i.x),a.addScaledVector(jt,i.y),a.addScaledVector(Mt,i.z),a}static isFrontFacing(e,t,n,r){return bt.subVectors(n,t),xt.subVectors(e,t),bt.cross(xt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bt.subVectors(this.c,this.b),xt.subVectors(this.a,this.b),bt.cross(xt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;wt.subVectors(r,n),Tt.subVectors(i,n),Dt.subVectors(e,n);let s=wt.dot(Dt),c=Tt.dot(Dt);if(s<=0&&c<=0)return t.copy(n);Ot.subVectors(e,r);let l=wt.dot(Ot),u=Tt.dot(Ot);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(wt,a);kt.subVectors(e,i);let f=wt.dot(kt),p=Tt.dot(kt);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Tt,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Et.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Et,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(wt,a).addScaledVector(Tt,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pt=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(It.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(It.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=It.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,It):It.fromBufferAttribute(r,t),It.applyMatrix4(e.matrixWorld),this.expandByPoint(It);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Lt.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Lt.copy(e.boundingBox)),Lt.applyMatrix4(e.matrixWorld),this.union(Lt)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,It),It.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wt),Gt.subVectors(this.max,Wt),Rt.subVectors(e.a,Wt),zt.subVectors(e.b,Wt),Bt.subVectors(e.c,Wt),Vt.subVectors(zt,Rt),Ht.subVectors(Bt,zt),Ut.subVectors(Rt,Bt);let t=[0,-Vt.z,Vt.y,0,-Ht.z,Ht.y,0,-Ut.z,Ut.y,Vt.z,0,-Vt.x,Ht.z,0,-Ht.x,Ut.z,0,-Ut.x,-Vt.y,Vt.x,0,-Ht.y,Ht.x,0,-Ut.y,Ut.x,0];return!Jt(t,Rt,zt,Bt,Gt)||(t=[1,0,0,0,1,0,0,0,1],!Jt(t,Rt,zt,Bt,Gt))?!1:(Kt.crossVectors(Vt,Ht),t=[Kt.x,Kt.y,Kt.z],Jt(t,Rt,zt,Bt,Gt))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,It).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(It).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Ft[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ft[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ft[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ft[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ft[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ft[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ft[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ft[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ft)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ft=[new W,new W,new W,new W,new W,new W,new W,new W],It=new W,Lt=new Pt,Rt=new W,zt=new W,Bt=new W,Vt=new W,Ht=new W,Ut=new W,Wt=new W,Gt=new W,Kt=new W,qt=new W;function Jt(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){qt.fromArray(e,a);let o=i.x*Math.abs(qt.x)+i.y*Math.abs(qt.y)+i.z*Math.abs(qt.z),s=t.dot(qt),c=n.dot(qt),l=r.dot(qt);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Yt=Xt();function Xt(){let e=new ArrayBuffer(4),t=new Float32Array(e),n=new Uint32Array(e),r=new Uint32Array(512),i=new Uint32Array(512);for(let e=0;e<256;++e){let t=e-127;t<-27?(r[e]=0,r[e|256]=32768,i[e]=24,i[e|256]=24):t<-14?(r[e]=1024>>-t-14,r[e|256]=1024>>-t-14|32768,i[e]=-t-1,i[e|256]=-t-1):t<=15?(r[e]=t+15<<10,r[e|256]=t+15<<10|32768,i[e]=13,i[e|256]=13):t<128?(r[e]=31744,r[e|256]=64512,i[e]=24,i[e|256]=24):(r[e]=31744,r[e|256]=64512,i[e]=13,i[e|256]=13)}let a=new Uint32Array(2048),o=new Uint32Array(64),s=new Uint32Array(64);for(let e=1;e<1024;++e){let t=e<<13,n=0;for(;!(t&8388608);)t<<=1,n-=8388608;t&=-8388609,n+=947912704,a[e]=t|n}for(let e=1024;e<2048;++e)a[e]=939524096+(e-1024<<13);for(let e=1;e<31;++e)o[e]=e<<23;o[31]=1199570944,o[32]=2147483648;for(let e=33;e<63;++e)o[e]=2147483648+(e-32<<23);o[63]=3347054592;for(let e=1;e<64;++e)e!==32&&(s[e]=1024);return{floatView:t,uint32View:n,baseTable:r,shiftTable:i,mantissaTable:a,exponentTable:o,offsetTable:s}}function Zt(e){Math.abs(e)>65504&&R(`DataUtils.toHalfFloat(): Value out of range.`),e=H(e,-65504,65504),Yt.floatView[0]=e;let t=Yt.uint32View[0],n=t>>23&511;return Yt.baseTable[n]+((t&8388607)>>Yt.shiftTable[n])}function Qt(e){let t=e>>10;return Yt.uint32View[0]=Yt.mantissaTable[Yt.offsetTable[t]+(e&1023)]+Yt.exponentTable[t],Yt.floatView[0]}var $t=class{static toHalfFloat(e){return Zt(e)}static fromHalfFloat(e){return Qt(e)}},en=new W,tn=new U,nn=0,rn=class extends oe{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nn++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=l,this.version=0,this._normalizationScale=e===void 0?void 0:pe(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXY(t,tn.x,tn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?me(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?he(e,this.array):Math.round(e*t)}},an=class extends rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}},on=class extends rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Y=class extends rn{constructor(e,t,n){super(new Float32Array(e),t,n)}},sn=new Pt,cn=new W,ln=new W,un=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?sn.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cn.subVectors(e,this.center);let t=cn.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(cn,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ln.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cn.copy(e.center).add(ln)),this.expandByPoint(cn.copy(e.center).sub(ln))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},dn=0,fn=new Re,pn=new lt,mn=new W,hn=new Pt,gn=new Pt,_n=new W,vn=class e extends oe{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dn++}),this.uuid=V(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(ee(e)?on:an)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new G().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return pn.lookAt(e),pn.updateMatrix(),this.applyMatrix4(pn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mn).negate(),this.translate(mn.x,mn.y,mn.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Y(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&R(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];hn.setFromBufferAttribute(n),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&z(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new W,1/0);else if(e){let n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];gn.setFromBufferAttribute(n),this.morphTargetsRelative?(_n.addVectors(hn.min,gn.min),hn.expandByPoint(_n),_n.addVectors(hn.max,gn.max),hn.expandByPoint(_n)):(hn.expandByPoint(gn.min),hn.expandByPoint(gn.max))}hn.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)_n.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(_n));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)_n.fromBufferAttribute(a,t),o&&(mn.fromBufferAttribute(e,t),_n.add(mn)),r=Math.max(r,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&z(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){z(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new rn(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new W,s[e]=new W;let l=new W,u=new W,d=new W,f=new U,p=new U,m=new U,h=new W,g=new W;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new W,b=new W,x=new W,S=new W;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new rn(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new W,i=new W,a=new W,o=new W,s=new W,c=new W,l=new W,u=new W;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new rn(a,r,i)}if(this.index===null)return R(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},yn=new W,bn=new W,xn=new G,Sn=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=yn.subVectors(n,t).cross(bn.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(yn),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||xn.getNormalMatrix(e),r=this.coplanarPoint(yn).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Cn=0,wn=class extends oe{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cn++}),this.uuid=V(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=M,this.stencilZFail=M,this.stencilZPass=M,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){R(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new _t().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Sn().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new U().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new U().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Tn=new W,En=new W,Dn=new W,On=new W,kn=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.origin).addScaledVector(this.direction,t),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){En.copy(e).add(t).multiplyScalar(.5),Dn.copy(t).sub(e).normalize(),On.copy(this.origin).sub(En);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Dn),o=On.dot(this.direction),s=-On.dot(Dn),c=On.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(En).addScaledVector(Dn,d),f}intersectSphere(e,t){if(e.radius<0)return null;Tn.subVectors(e.center,this.origin);let n=Tn.dot(this.direction),r=Tn.dot(Tn)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,ee=C/w,F=1/w,I=T-P*D,te=E-ee*D,L=O-P*A,ne=k-ee*A,re=j-P*N,R=M-ee*N,z=re*ne-R*L,B=I*R-te*re,ie=L*te-ne*I;if(r){if(z<0||B<0||ie<0)return null}else if((z<0||B<0||ie<0)&&(z>0||B>0||ie>0))return null;let ae=z+B+ie;if(ae===0)return null;let oe=F*(z*D+B*A+ie*N);return(ae>0?oe<0:oe>0)?null:this.at(oe/ae,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},An=class extends wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},jn=new Re,Mn=new kn,Nn=new un,Pn=new W,Fn=new W,In=new W,Ln=new W,Rn=new W,zn=new W,Bn=new W,Vn=new W,Hn=class extends lt{constructor(e=new vn,t=new An){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){zn.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Rn.fromBufferAttribute(s,e),a?zn.addScaledVector(Rn,r):zn.addScaledVector(Rn.sub(t),r))}t.add(zn)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nn.copy(n.boundingSphere),Nn.applyMatrix4(i),Mn.copy(e.ray).recast(e.near),Nn.containsPoint(Mn.origin)===!1&&(Mn.intersectSphere(Nn,Pn)===null||Mn.origin.distanceToSquared(Pn)>(e.far-e.near)**2)||(jn.copy(i).invert(),Mn.copy(e.ray).applyMatrix4(jn),(n.boundingBox===null||Mn.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Mn)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Wn(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Wn(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Wn(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Wn(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Un(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Vn.copy(s),Vn.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Vn);return l<n.near||l>n.far?null:{distance:l,point:Vn.clone(),object:e}}function Wn(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Fn),e.getVertexPosition(c,In),e.getVertexPosition(l,Ln);let u=Un(e,t,n,r,Fn,In,Ln,Bn);if(u){let e=new W;Nt.getBarycoord(Bn,Fn,In,Ln,e),i&&(u.uv=Nt.getInterpolatedAttribute(i,s,c,l,e,new U)),a&&(u.uv1=Nt.getInterpolatedAttribute(a,s,c,l,e,new U)),o&&(u.normal=Nt.getInterpolatedAttribute(o,s,c,l,e,new W),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new W,materialIndex:0};Nt.getNormal(Fn,In,Ln,t.normal),u.face=t,u.barycoord=e}return u}var Gn=class extends K{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Kn=class extends rn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},qn=new un,Jn=new U(.5,.5),Yn=new W,Xn=class{constructor(e=new Sn,t=new Sn,n=new Sn,r=new Sn,i=new Sn,a=new Sn){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=P,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(e){return qn.center.set(0,0,0),qn.radius=.7071067811865476+Jn.distanceTo(e.center),qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Yn.x=r.normal.x>0?e.max.x:e.min.x,Yn.y=r.normal.y>0?e.max.y:e.min.y,Yn.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Yn)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Zn=new Re,Qn=class e{constructor(){this.coordinateSystem=P,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];Zn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new Xn),n[e].setFromProjectionMatrix(Zn,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Xn),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},$n=class extends wn{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},er=new Re,tr=new kn,nr=new un,rr=new W,ir=class extends lt{constructor(e=new vn,t=new $n){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(r),nr.radius+=i,e.ray.intersectsSphere(nr)===!1)return;er.copy(r).invert(),tr.copy(e.ray).applyMatrix4(er);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);rr.fromBufferAttribute(l,n),ar(rr,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)rr.fromBufferAttribute(l,a),ar(rr,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ar(e,t,n,r,i,a,o){let s=tr.distanceSqToPoint(e);if(s<n){let n=new W;tr.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var or=class extends K{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},sr=class extends K{constructor(e,t,n=c,i,a,o,s=r,l=r,u,d=h,f=1){if(d!==1026&&d!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:f},i,a,o,s,l,d,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ke(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},cr=class extends sr{constructor(e,t=c,n=301,i,a,o=r,s=r,l,u=h){let d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,n,i,a,o,s,l,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},lr=class extends K{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ur=class e extends vn{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Y(c,3)),this.setAttribute(`normal`,new Y(l,3)),this.setAttribute(`uv`,new Y(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new W;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},dr=class e extends vn{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new W,l=new U;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Y(a,3)),this.setAttribute(`normal`,new Y(o,3)),this.setAttribute(`uv`,new Y(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},fr=class e extends vn{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Y(u,3)),this.setAttribute(`normal`,new Y(d,3)),this.setAttribute(`uv`,new Y(f,2));function _(){let a=new W,_=new W,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new U,m=new W,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},pr=class e extends fr{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},mr=class e extends vn{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Y(i,3)),this.setAttribute(`normal`,new Y(i.slice(),3)),this.setAttribute(`uv`,new Y(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new W,r=new W,i=new W;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new W;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new W;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new W,t=new W,n=new W,r=new W,o=new U,s=new U,c=new U;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},hr=class e extends mr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},gr=class e extends vn{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Y(p,3)),this.setAttribute(`normal`,new Y(m,3)),this.setAttribute(`uv`,new Y(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},_r=class e extends vn{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new W,d=new W,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Y(p,3)),this.setAttribute(`normal`,new Y(m,3)),this.setAttribute(`uv`,new Y(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function vr(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(br(i))i.isRenderTargetTexture?(R(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(br(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function yr(e){let t={};for(let n=0;n<e.length;n++){let r=vr(e[n]);for(let e in r)t[e]=r[e]}return t}function br(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function xr(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Sr(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}var Cr={clone:vr,merge:yr},wr=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tr=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Er=class extends wn{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wr,this.fragmentShader=Tr,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vr(e.uniforms),this.uniformsGroups=xr(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new _t().setHex(r.value);break;case`v2`:this.uniforms[n].value=new U().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new W().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Ne().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new G().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Re().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Dr=class extends Er{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Or=class extends wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},kr=class extends wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ar(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function jr(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Mr=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Nr=class extends Mr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:T,endingEnd:T}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case E:i=e,o=2*t-n;break;case D:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case E:a=e,s=2*n-t;break;case D:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Pr=class extends Mr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Fr=class extends Mr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ir=class extends Mr{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=zr(n,t,g,y,r);i[p]=Lr(x,o,_,b,m)}return i}};function Lr(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Rr(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function zr(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Lr(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Rr(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Br=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ar(t,this.TimeBufferType),this.values=Ar(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ar(e.times,Array),values:Ar(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),jr(e.settings)&&(n.settings={inTangents:Ar(e.settings.inTangents,Array),outTangents:Ar(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ir(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case x:t=this.InterpolantFactoryMethodDiscrete;break;case S:t=this.InterpolantFactoryMethodLinear;break;case C:t=this.InterpolantFactoryMethodSmooth;break;case w:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return R(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return x;case this.InterpolantFactoryMethodLinear:return S;case this.InterpolantFactoryMethodSmooth:return C;case this.InterpolantFactoryMethodBezier:return w}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;jr(this.settings)&&(Vr(this.settings.inTangents,e),Vr(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;jr(this.settings)&&(Hr(this.settings.inTangents,e),Hr(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(z(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(z(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){z(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){z(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&F(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){z(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===C,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,jr(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Vr(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function Hr(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Br.prototype.ValueTypeName=``,Br.prototype.TimeBufferType=Float32Array,Br.prototype.ValueBufferType=Float32Array,Br.prototype.DefaultInterpolation=S;var Ur=class extends Br{constructor(e,t,n){super(e,t,n)}};Ur.prototype.ValueTypeName=`bool`,Ur.prototype.ValueBufferType=Array,Ur.prototype.DefaultInterpolation=x,Ur.prototype.InterpolantFactoryMethodLinear=void 0,Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Wr=class extends Br{constructor(e,t,n,r){super(e,t,n,r)}};Wr.prototype.ValueTypeName=`color`;var Gr=class extends Br{constructor(e,t,n,r){super(e,t,n,r)}};Gr.prototype.ValueTypeName=`number`;var Kr=class extends Mr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)ge.slerpFlat(i,0,a,c-o,a,c,s);return i}},qr=class extends Br{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Kr(this.times,this.values,this.getValueSize(),e)}};qr.prototype.ValueTypeName=`quaternion`,qr.prototype.InterpolantFactoryMethodSmooth=void 0;var Jr=class extends Br{constructor(e,t,n){super(e,t,n)}};Jr.prototype.ValueTypeName=`string`,Jr.prototype.ValueBufferType=Array,Jr.prototype.DefaultInterpolation=x,Jr.prototype.InterpolantFactoryMethodLinear=void 0,Jr.prototype.InterpolantFactoryMethodSmooth=void 0;var Yr=class extends Br{constructor(e,t,n,r){super(e,t,n,r)}};Yr.prototype.ValueTypeName=`vector`;var Xr=new W,Zr=new ge,Qr=new W,$r=class extends lt{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=P,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xr,Zr,Qr),Qr.x===1&&Qr.y===1&&Qr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xr,Zr,Qr.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Xr,Zr,Qr),Qr.x===1&&Qr.y===1&&Qr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xr,Zr,Qr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ei=new W,ti=new U,ni=new U,ri=class extends $r{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=le*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ce*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return le*2*Math.atan(Math.tan(ce*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ei.x,ei.y).multiplyScalar(-e/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-e/ei.z)}getViewSize(e,t){return this.getViewBounds(e,ti,ni),t.subVectors(ni,ti)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ce*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ii=class extends $r{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ai=class extends vn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},oi=-90,si=1,ci=class extends lt{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ri(oi,si,e,t);r.layers=this.layers,this.add(r);let i=new ri(oi,si,e,t);i.layers=this.layers,this.add(i);let a=new ri(oi,si,e,t);a.layers=this.layers,this.add(a);let o=new ri(oi,si,e,t);o.layers=this.layers,this.add(o);let s=new ri(oi,si,e,t);s.layers=this.layers,this.add(s);let c=new ri(oi,si,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},li=class extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},ui=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=di.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function di(){this._document.hidden===!1&&this.reset()}var fi=`\\[\\]\\.:\\/`,pi=RegExp(`[\\[\\]\\.:\\/]`,`g`),mi=`[^\\[\\]\\.:\\/]`,hi=`[^`+fi.replace(`\\.`,``)+`]`,gi=`((?:WC+[\\/:])*)`.replace(`WC`,mi),_i=`(WCOD+)?`.replace(`WCOD`,hi),vi=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,mi),yi=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,mi),bi=RegExp(`^`+gi+_i+vi+yi+`$`),xi=[`material`,`materials`,`bones`,`map`],Si=class{constructor(e,t,n){let r=n||Ci.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ci=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(pi,``)}static parseTrackName(e){let t=bi.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);xi.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){R(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){z(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){z(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){z(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){z(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){z(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;z(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ci.Composite=Si,Ci.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ci.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ci.prototype.GetterByBindingType=[Ci.prototype._getValue_direct,Ci.prototype._getValue_array,Ci.prototype._getValue_arrayElement,Ci.prototype._getValue_toArray],Ci.prototype.SetterByBindingTypeAndVersioning=[[Ci.prototype._setValue_direct,Ci.prototype._setValue_direct_setNeedsUpdate,Ci.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ci.prototype._setValue_array,Ci.prototype._setValue_array_setNeedsUpdate,Ci.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ci.prototype._setValue_arrayElement,Ci.prototype._setValue_arrayElement_setNeedsUpdate,Ci.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ci.prototype._setValue_fromArray,Ci.prototype._setValue_fromArray_setNeedsUpdate,Ci.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function wi(e,t,n,r){let i=Ti(r);switch(n){case 1021:return e*t;case 1028:return e*t/i.components*i.byteLength;case _:return e*t/i.components*i.byteLength;case v:return e*t*2/i.components*i.byteLength;case y:return e*t*2/i.components*i.byteLength;case 1022:return e*t*3/i.components*i.byteLength;case m:return e*t*4/i.components*i.byteLength;case b:return e*t*4/i.components*i.byteLength;case 33776:case 33777:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(e,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(e,8)*Math.max(t,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(e/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(e/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Ti(e){switch(e){case o:case 1010:return{byteLength:1,components:1};case s:case 1011:case u:return{byteLength:2,components:1};case d:case f:return{byteLength:2,components:4};case c:case 1013:case l:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?R(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function Ei(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Di(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var X={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Z={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new G},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new G}},envmap:{envMap:{value:null},envMapRotation:{value:new G},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new G}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new G}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new G},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new G},normalScale:{value:new U(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new G},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new G}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new G}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new G}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0},uvTransform:{value:new G}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new U(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new G},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0}}},Oi={basic:{uniforms:yr([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.fog]),vertexShader:X.meshbasic_vert,fragmentShader:X.meshbasic_frag},lambert:{uniforms:yr([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new _t(0)},envMapIntensity:{value:1}}]),vertexShader:X.meshlambert_vert,fragmentShader:X.meshlambert_frag},phong:{uniforms:yr([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:X.meshphong_vert,fragmentShader:X.meshphong_frag},standard:{uniforms:yr([Z.common,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.roughnessmap,Z.metalnessmap,Z.fog,Z.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag},toon:{uniforms:yr([Z.common,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.gradientmap,Z.fog,Z.lights,{emissive:{value:new _t(0)}}]),vertexShader:X.meshtoon_vert,fragmentShader:X.meshtoon_frag},matcap:{uniforms:yr([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,{matcap:{value:null}}]),vertexShader:X.meshmatcap_vert,fragmentShader:X.meshmatcap_frag},points:{uniforms:yr([Z.points,Z.fog]),vertexShader:X.points_vert,fragmentShader:X.points_frag},dashed:{uniforms:yr([Z.common,Z.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:X.linedashed_vert,fragmentShader:X.linedashed_frag},depth:{uniforms:yr([Z.common,Z.displacementmap]),vertexShader:X.depth_vert,fragmentShader:X.depth_frag},normal:{uniforms:yr([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,{opacity:{value:1}}]),vertexShader:X.meshnormal_vert,fragmentShader:X.meshnormal_frag},sprite:{uniforms:yr([Z.sprite,Z.fog]),vertexShader:X.sprite_vert,fragmentShader:X.sprite_frag},background:{uniforms:{uvTransform:{value:new G},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:X.background_vert,fragmentShader:X.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new G}},vertexShader:X.backgroundCube_vert,fragmentShader:X.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:X.cube_vert,fragmentShader:X.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:X.equirect_vert,fragmentShader:X.equirect_frag},distance:{uniforms:yr([Z.common,Z.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:X.distance_vert,fragmentShader:X.distance_frag},shadow:{uniforms:yr([Z.lights,Z.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:X.shadow_vert,fragmentShader:X.shadow_frag}};Oi.physical={uniforms:yr([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new G},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new G},clearcoatNormalScale:{value:new U(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new G},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new G},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new G},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new G},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new G},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new G},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new G},transmissionSamplerSize:{value:new U},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new G},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new G},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new G},anisotropyVector:{value:new U},anisotropyMap:{value:null},anisotropyMapTransform:{value:new G}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag};var ki={r:0,b:0,g:0},Ai=new Re,ji=new G;ji.set(-1,0,0,0,1,0,0,0,1);function Mi(e,t,n,r,i,a){let o=new _t(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new Hn(new ur(1,1,1),new Er({name:`BackgroundCubeMaterial`,uniforms:vr(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ai.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ji),l.material.toneMapped=Ce.getTransfer(i.colorSpace)!==j,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Hn(new gr(2,2),new Er({name:`BackgroundMaterial`,uniforms:vr(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Ce.getTransfer(i.colorSpace)!==j,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(ki,Sr(e)),n.buffers.color.setClear(ki.r,ki.g,ki.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Ni(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Pi(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Fi(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(R(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&R(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&R(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Ii(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Sn,s=new G,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Li=class extends Fe{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new or(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ur(5,5,5),a=new Er({name:`CubemapFromEquirect`,uniforms:vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});a.uniforms.tEquirect.value=t;let o=new Hn(r,a),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=i),new ci(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Ri=256,zi=3,Bi=20,Vi=256,Hi=16,Ui=3,Wi=new W,Gi=new _t,Ki=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ci(1,10,null),this._boxMesh=new Hn(new ur(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Wi}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(Gi));let h=new ci(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$i(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qi(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ri,fe(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?Ri:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=qi(e,!1,!1),n=Math.log2(e)-zi;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=qi(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=$i()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Qi()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Yi(),this._integrationMaterial=Xi());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/Hi);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-Ui)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(Vi*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Zi());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function qi(e,t,n){return new Li(e,{minFilter:a,generateMipmaps:t,type:u,colorSpace:k,depthBuffer:n})}function Ji(e,t,n){return new Er({name:e,uniforms:t,vertexShader:X.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Yi(){return Ji(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Vi}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Xi(){return Ji(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Hi}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Zi(){return Ji(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Bi}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Qi(){return Ji(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function $i(){return Ji(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ea(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Li(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Ki(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Ki(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function ta(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&B(`WebGLRenderer: `+e+` extension not supported.`),t}}}function na(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?on:an)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function ra(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function ia(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:z(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function aa(e,t,n){let r=new WeakMap,i=new Ne;function a(a,o,s){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u===void 0?0:u.length,f=r.get(o);if(f===void 0||f.count!==d){f!==void 0&&f.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],u=o.morphAttributes.color||[],p=0;e===!0&&(p=1),n===!0&&(p=2),a===!0&&(p=3);let m=o.attributes.position.count*p,h=1;m>t.maxTextureSize&&(h=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);let g=new Float32Array(m*h*4*d),_=new Ie(g,m,h,d);_.type=l,_.needsUpdate=!0;let v=p*4;for(let t=0;t<d;t++){let r=s[t],o=c[t],l=u[t],d=m*h*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(l,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=l.itemSize===4?i.w:1)}}f={count:d,texture:_,size:new U(m,h)},r.set(o,f);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,f.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,f.size)}return{update:a}}function oa(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var sa={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function ca(e,t,n,r,i,a){let o=new Fe(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,d=new vn;d.setAttribute(`position`,new Y([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute(`uv`,new Y([0,2,0,0,2,0],2));let f=new Dr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new Hn(d,f),h=new ii(-1,1,1,-1,0,1),_=null,v=null,y=!1,b,x=null,S=[],C=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<S.length;n++){let r=S[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){S=e,C=S.length>0&&S[0].isRenderPass===!0;let t=o.width,n=o.height;S.length>0&&s===null&&(s=new Fe(t,n,{type:u,depthBuffer:!1,stencilBuffer:!1}),c=new Fe(t,n,{type:u,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&S.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new sr(t,n),a===!0&&(l.format=g,l.type=p)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<S.length;e++){let i=S[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(y||e.toneMapping===0&&S.length===0)return!1;if(x=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return C===!1&&e.setRenderTarget(o),b=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return C},this.end=function(e,t){e.toneMapping=b,y=!0;let n=o,r=s;for(let i=0;i<S.length;i++){let a=S[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(_!==e.outputColorSpace||v!==e.toneMapping){_=e.outputColorSpace,v=e.toneMapping,f.defines={},Ce.getTransfer(_)===`srgb`&&(f.defines.SRGB_TRANSFER=``);let t=sa[v];t&&(f.defines[t]=``),f.needsUpdate=!0}f.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(x),e.render(m,h),x=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),d.dispose(),f.dispose()}}var la=new K,ua=new sr(1,1),da=new cr(1),fa=new Ie,pa=new Le,ma=new or,ha=[],ga=[],_a=new Float32Array(16),va=new Float32Array(9),ya=new Float32Array(4);function ba(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ha[i];if(a===void 0&&(a=new Float32Array(i),ha[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function xa(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Sa(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Ca(e,t){let n=ga[t];n===void 0&&(n=new Int32Array(t),ga[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function wa(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Ta(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xa(n,t))return;e.uniform2fv(this.addr,t),Sa(n,t)}}function Ea(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(xa(n,t))return;e.uniform3fv(this.addr,t),Sa(n,t)}}function Da(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xa(n,t))return;e.uniform4fv(this.addr,t),Sa(n,t)}}function Oa(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(xa(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Sa(n,t)}else{if(xa(n,r))return;ya.set(r),e.uniformMatrix2fv(this.addr,!1,ya),Sa(n,r)}}function ka(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(xa(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Sa(n,t)}else{if(xa(n,r))return;va.set(r),e.uniformMatrix3fv(this.addr,!1,va),Sa(n,r)}}function Aa(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(xa(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Sa(n,t)}else{if(xa(n,r))return;_a.set(r),e.uniformMatrix4fv(this.addr,!1,_a),Sa(n,r)}}function ja(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Ma(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xa(n,t))return;e.uniform2iv(this.addr,t),Sa(n,t)}}function Na(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(xa(n,t))return;e.uniform3iv(this.addr,t),Sa(n,t)}}function Pa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xa(n,t))return;e.uniform4iv(this.addr,t),Sa(n,t)}}function Fa(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ia(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xa(n,t))return;e.uniform2uiv(this.addr,t),Sa(n,t)}}function La(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(xa(n,t))return;e.uniform3uiv(this.addr,t),Sa(n,t)}}function Ra(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xa(n,t))return;e.uniform4uiv(this.addr,t),Sa(n,t)}}function za(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function Ba(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?za(ua):la,n.setTexture2D(t||a,i)}function Va(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||pa,i)}function Ha(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?za(da):ma,n.setTextureCube(t||a,i)}function Ua(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||fa,i)}function Wa(e){switch(e){case 5126:return wa;case 35664:return Ta;case 35665:return Ea;case 35666:return Da;case 35674:return Oa;case 35675:return ka;case 35676:return Aa;case 5124:case 35670:return ja;case 35667:case 35671:return Ma;case 35668:case 35672:return Na;case 35669:case 35673:return Pa;case 5125:return Fa;case 36294:return Ia;case 36295:return La;case 36296:return Ra;case 35678:case 36198:case 36298:case 36306:case 35682:return Ba;case 35679:case 36299:case 36307:return Va;case 35680:case 36300:case 36308:case 36293:return Ha;case 36289:case 36303:case 36311:case 36292:return Ua}}function Ga(e,t){e.uniform1fv(this.addr,t)}function Ka(e,t){let n=ba(t,this.size,2);e.uniform2fv(this.addr,n)}function qa(e,t){let n=ba(t,this.size,3);e.uniform3fv(this.addr,n)}function Ja(e,t){let n=ba(t,this.size,4);e.uniform4fv(this.addr,n)}function Ya(e,t){let n=ba(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Xa(e,t){let n=ba(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Za(e,t){let n=ba(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Qa(e,t){e.uniform1iv(this.addr,t)}function $a(e,t){e.uniform2iv(this.addr,t)}function eo(e,t){e.uniform3iv(this.addr,t)}function to(e,t){e.uniform4iv(this.addr,t)}function no(e,t){e.uniform1uiv(this.addr,t)}function ro(e,t){e.uniform2uiv(this.addr,t)}function io(e,t){e.uniform3uiv(this.addr,t)}function ao(e,t){e.uniform4uiv(this.addr,t)}function oo(e,t,n){let r=this.cache,i=t.length,a=Ca(n,i);xa(r,a)||(e.uniform1iv(this.addr,a),Sa(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?za(ua):la;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function so(e,t,n){let r=this.cache,i=t.length,a=Ca(n,i);xa(r,a)||(e.uniform1iv(this.addr,a),Sa(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||pa,a[e])}function co(e,t,n){let r=this.cache,i=t.length,a=Ca(n,i);xa(r,a)||(e.uniform1iv(this.addr,a),Sa(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?za(da):ma;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function lo(e,t,n){let r=this.cache,i=t.length,a=Ca(n,i);xa(r,a)||(e.uniform1iv(this.addr,a),Sa(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||fa,a[e])}function uo(e){switch(e){case 5126:return Ga;case 35664:return Ka;case 35665:return qa;case 35666:return Ja;case 35674:return Ya;case 35675:return Xa;case 35676:return Za;case 5124:case 35670:return Qa;case 35667:case 35671:return $a;case 35668:case 35672:return eo;case 35669:case 35673:return to;case 5125:return no;case 36294:return ro;case 36295:return io;case 36296:return ao;case 35678:case 36198:case 36298:case 36306:case 35682:return oo;case 35679:case 36299:case 36307:return so;case 35680:case 36300:case 36308:case 36293:return co;case 36289:case 36303:case 36311:case 36292:return lo}}var fo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wa(t.type)}},po=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uo(t.type)}},mo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},ho=/(\w+)(\])?(\[|\.)?/g;function go(e,t){e.seq.push(t),e.map[t.id]=t}function _o(e,t,n){let r=e.name,i=r.length;for(ho.lastIndex=0;;){let a=ho.exec(r),o=ho.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){go(n,l===void 0?new fo(s,e,t):new po(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new mo(s),go(n,e)),n=e}}}var vo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);_o(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function yo(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var bo=37297,xo=0;function So(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Co=new G;function wo(e){Ce._getMatrix(Co,Ce.workingColorSpace,e);let t=`mat3( ${Co.elements.map(e=>e.toFixed(4))} )`;switch(Ce.getTransfer(e)){case A:return[t,`LinearTransferOETF`];case j:return[t,`sRGBTransferOETF`];default:return R(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function To(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+So(e.getShaderSource(t),r)}return i}function Eo(e,t){let n=wo(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Do={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Oo(e,t){let n=Do[t];return n===void 0?(R(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var ko=new W;function Ao(){return Ce.getLuminanceCoefficients(ko),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${ko.x.toFixed(4)}, ${ko.y.toFixed(4)}, ${ko.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function jo(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Po).join(`
`)}function Mo(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function No(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Po(e){return e!==``}function Fo(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Io(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Lo=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ro(e){return e.replace(Lo,zo)}function zo(e,t){let n=X[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return Ro(n)}var Bo=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vo(e){return e.replace(Bo,Ho)}function Ho(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Uo(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Wo={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Go(e){return Wo[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Ko={302:`ENVMAP_MODE_REFRACTION`};function qo(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Ko[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Jo={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Yo(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Jo[e.combine]||`ENVMAP_BLENDING_NONE`}function Xo(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Go(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=qo(n),d=Yo(n),f=jo(n),p=Mo(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Po).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Po).join(`
`),g.length>0&&(g+=`
`)):(h=[Uo(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Po).join(`
`),g=[Uo(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:X.tonemapping_pars_fragment,n.toneMapping===0?``:Oo(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,X.colorspace_pars_fragment,Eo(`linearToOutputTexel`,n.outputColorSpace),Ao(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Po).join(`
`)),o=Ro(o),o=Fo(o,n),o=Io(o,n),s=Ro(s),s=Fo(s,n),s=Io(s,n),o=Vo(o),s=Vo(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=yo(i,i.VERTEX_SHADER,v),x=yo(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=To(i,b,`vertex`),n=To(i,x,`fragment`);z(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):R(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new vo(i,m),w=No(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,bo)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=xo++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Zo=0,Qo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new $o(e),t.set(e,n)),n}},$o=class{constructor(e){this.id=Zo++,this.code=e,this.usedTimes=0}};function es(e){return e===1030||e===37490||e===36285}function ts(e,t,n,r,i,a){let o=new qe,s=new Qo,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&R(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=Oi[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=m.isInstancedMesh===!0,N=m.isBatchedMesh===!0,P=!!i.map,ee=!!i.matcap,F=!!b,I=F&&b.isPMREMTexture===!0,te=!!i.aoMap,L=!!i.lightMap,ne=!!i.bumpMap&&i.wireframe===!1,re=!!i.normalMap,z=!!i.displacementMap,B=!!i.emissiveMap,ie=!!i.metalnessMap,ae=!!i.roughnessMap,oe=i.anisotropy>0,se=i.clearcoat>0,ce=i.diffuseRoughness>0,le=i.dispersion>0,V=i.retroreflectivity>0,H=i.iridescence>0,ue=i.sheen>0,de=i.transmission>0,fe=oe&&!!i.anisotropyMap,pe=se&&!!i.clearcoatMap,me=se&&!!i.clearcoatNormalMap,he=se&&!!i.clearcoatRoughnessMap,U=ce&&!!i.diffuseRoughnessMap,ge=H&&!!i.iridescenceMap,W=H&&!!i.iridescenceThicknessMap,_e=ue&&!!i.sheenColorMap,ve=ue&&!!i.sheenRoughnessMap,G=!!i.specularMap,ye=!!i.specularColorMap,be=!!i.specularIntensityMap,xe=de&&!!i.transmissionMap,Se=de&&!!i.thicknessMap,we=!!i.gradientMap,Te=!!i.alphaMap,Ee=i.alphaTest>0,De=!!i.alphaHash,Oe=!!i.extensions,ke=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ke=e.toneMapping);let Ae=I?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,je={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:N,batchingColor:N&&m._colorsTexture!==null,instancing:M,instancingColor:M&&m.instanceColor!==null,instancingMorph:M&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ce.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:P,matcap:ee,envMap:F,envMapMode:F&&b.mapping,envMapPMREM:I,envMapMaxLod:I?Ae.length-1:null,envMapSize:I?Ae[0].width:null,aoMap:te,lightMap:L,bumpMap:ne,normalMap:re,displacementMap:z,emissiveMap:B,normalMapObjectSpace:re&&i.normalMapType===1,normalMapTangentSpace:re&&i.normalMapType===0,packedNormalMap:re&&i.normalMapType===0&&es(i.normalMap.format),metalnessMap:ie,roughnessMap:ae,anisotropy:oe,anisotropyMap:fe,clearcoat:se,clearcoatMap:pe,clearcoatNormalMap:me,clearcoatRoughnessMap:he,diffuseRoughness:ce,diffuseRoughnessMap:U,dispersion:le,retroreflection:V,iridescence:H,iridescenceMap:ge,iridescenceThicknessMap:W,sheen:ue,sheenColorMap:_e,sheenRoughnessMap:ve,specularMap:G,specularColorMap:ye,specularIntensityMap:be,transmission:de,transmissionMap:xe,thicknessMap:Se,gradientMap:we,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Te,alphaTest:Ee,alphaHash:De,combine:i.combine,mapUv:P&&p(i.map.channel),aoMapUv:te&&p(i.aoMap.channel),lightMapUv:L&&p(i.lightMap.channel),bumpMapUv:ne&&p(i.bumpMap.channel),normalMapUv:re&&p(i.normalMap.channel),displacementMapUv:z&&p(i.displacementMap.channel),emissiveMapUv:B&&p(i.emissiveMap.channel),metalnessMapUv:ie&&p(i.metalnessMap.channel),roughnessMapUv:ae&&p(i.roughnessMap.channel),anisotropyMapUv:fe&&p(i.anisotropyMap.channel),clearcoatMapUv:pe&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:me&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:U&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:ge&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:W&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:ve&&p(i.sheenRoughnessMap.channel),specularMapUv:G&&p(i.specularMap.channel),specularColorMapUv:ye&&p(i.specularColorMap.channel),specularIntensityMapUv:be&&p(i.specularIntensityMap.channel),transmissionMapUv:xe&&p(i.transmissionMap.channel),thicknessMapUv:Se&&p(i.thicknessMap.channel),alphaMapUv:Te&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(re||oe),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(P||Te),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&re===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:ke,decodeVideoTexture:P&&i.map.isVideoTexture===!0&&Ce.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:B&&i.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Oe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Oe&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=Oi[t];n=Cr.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new Xo(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function ns(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function rs(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function is(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function as(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||rs),r.length>1&&r.sort(t||is),i.length>1&&i.sort(t||is)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function os(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new as,e.set(t,[i])):n>=r.length?(i=new as,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function ss(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new W,color:new _t};break;case`SpotLight`:n={position:new W,direction:new W,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new W,color:new _t,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new W,skyColor:new _t,groundColor:new _t};break;case`RectAreaLight`:n={color:new _t,position:new W,halfWidth:new W,halfHeight:new W}}return e[t.id]=n,n}}}function cs(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var ls=0;function us(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function ds(e){let t=new ss,n=cs(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new W);let i=new W,a=new Re,o=new Re;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(us);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Z.LTC_FLOAT_1,r.rectAreaLTC2=Z.LTC_FLOAT_2):(r.rectAreaLTC1=Z.LTC_HALF_1,r.rectAreaLTC2=Z.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=ls++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function fs(e){let t=new ds(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function ps(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new fs(e),t.set(n,[a])):r>=i.length?(a=new fs(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var ms=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hs=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,gs=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],_s=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],vs=new Re,ys=new W,bs=new W;function xs(e,t,n){let a=new Xn,o=new U,s=new U,d=new Ne,f=new Or,p=new kr,m={},g=n.maxTextureSize,_={0:1,1:0,2:2},y=new Er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new U},radius:{value:4}},vertexShader:ms,fragmentShader:hs}),b=y.clone();b.defines.HORIZONTAL_PASS=1;let x=new vn;x.setAttribute(`position`,new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Hn(x,y),C=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let w=this.type;this.render=function(t,n,f){if(C.enabled===!1||C.autoUpdate===!1&&C.needsUpdate===!1||t.length===0)return;this.type===2&&(R(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let p=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),y=e.state;y.setBlending(0),y.buffers.depth.getReversed()===!0?y.buffers.color.setClear(0,0,0,0):y.buffers.color.setClear(1,1,1,1),y.buffers.depth.setTest(!0),y.setScissorTest(!1);let b=w!==this.type;b&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let p=0,m=t.length;p<m;p++){let m=t[p],_=m.shadow;if(_===void 0){R(`WebGLShadowMap:`,m,`has no shadow.`);continue}if(_.autoUpdate===!1&&_.needsUpdate===!1)continue;o.copy(_.mapSize);let x=_.getFrameExtents();o.multiply(x),s.copy(_.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(s.x=Math.floor(g/x.x),o.x=s.x*x.x,_.mapSize.x=s.x),o.y>g&&(s.y=Math.floor(g/x.y),o.y=s.y*x.y,_.mapSize.y=s.y));let S=e.state.buffers.depth.getReversed();if(_.camera._reversedDepth=S,_.map===null||b===!0){if(_.map!==null&&(_.map.depthTexture!==null&&(_.map.depthTexture.dispose(),_.map.depthTexture=null),_.map.dispose()),this.type===3){if(m.isPointLight){R(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}_.map=new Fe(o.x,o.y,{format:v,type:u,minFilter:i,magFilter:i,generateMipmaps:!1}),_.map.texture.name=m.name+`.shadowMap`,_.map.depthTexture=new sr(o.x,o.y,l),_.map.depthTexture.name=m.name+`.shadowMapDepth`,_.map.depthTexture.format=h,_.map.depthTexture.compareFunction=null,_.map.depthTexture.minFilter=r,_.map.depthTexture.magFilter=r}else m.isPointLight?(_.map=new Li(o.x),_.map.depthTexture=new cr(o.x,c)):(_.map=new Fe(o.x,o.y),_.map.depthTexture=new sr(o.x,o.y,c)),_.map.depthTexture.name=m.name+`.shadowMap`,_.map.depthTexture.format=h,this.type===1?(_.map.depthTexture.compareFunction=S?518:515,_.map.depthTexture.minFilter=i,_.map.depthTexture.magFilter=i):(_.map.depthTexture.compareFunction=null,_.map.depthTexture.minFilter=r,_.map.depthTexture.magFilter=r);_.camera.updateProjectionMatrix()}_.map.isWebGLCubeRenderTarget!==!0&&(_.map.width!==o.x||_.map.height!==o.y)&&_.map.setSize(o.x,o.y);let C=_.map.isWebGLCubeRenderTarget?6:_.getViewportCount();m.isPointLight!==!0&&_.updateMatrices(m,f);let w=_.camera.layers.mask&4294967294?_.camera.layers:f.layers;for(let t=0;t<C;t++){let r=_.getCamera(t);if(m.isPointLight){let e=_.camera,n=_.matrix,r=m.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),ys.setFromMatrixPosition(m.matrixWorld),e.position.copy(ys),bs.copy(e.position),bs.add(gs[t]),e.up.copy(_s[t]),e.lookAt(bs),e.updateMatrixWorld(),n.makeTranslation(-ys.x,-ys.y,-ys.z),vs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),_._frustum.setFromProjectionMatrix(vs,e.coordinateSystem,e.reversedDepth)}if(_.map.isWebGLCubeRenderTarget)e.setRenderTarget(_.map,t),e.clear();else{t===0&&(e.setRenderTarget(_.map),e.clear());let n=_.getViewport(t);d.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),y.viewport(d)}a=_.getFrustum(t),D(n,f,r,m,w,this.type)}_.isPointLightShadow!==!0&&this.type===3&&T(_,f),_.needsUpdate=!1}w=this.type,C.needsUpdate=!1,e.setRenderTarget(p,m,_)};function T(n,r){let i=t.update(S);y.defines.VSM_SAMPLES!==n.blurSamples&&(y.defines.VSM_SAMPLES=n.blurSamples,b.defines.VSM_SAMPLES=n.blurSamples,y.needsUpdate=!0,b.needsUpdate=!0),n.mapPass===null?n.mapPass=new Fe(o.x,o.y,{format:v,type:u}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),y.uniforms.shadow_pass.value=n.map.depthTexture,y.uniforms.resolution.value.set(n.map.width,n.map.height),y.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,y,S,null),b.uniforms.shadow_pass.value=n.mapPass.texture,b.uniforms.resolution.value.set(n.map.width,n.map.height),b.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,b,S,null)}function E(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?p:f,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=m[e];r===void 0&&(r={},m[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,O)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?_[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function D(n,r,i,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(a))){n.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse,n.matrixWorld);let a=t.update(n),s=n.material;if(Array.isArray(s)){let t=a.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=E(n,d,o,c);n.onBeforeShadow(e,n,r,i,a,t,u),e.renderBufferDirect(i,null,a,t,n,u),n.onAfterShadow(e,n,r,i,a,t,u)}}}else if(s.visible){let t=E(n,s,o,c);n.onBeforeShadow(e,n,r,i,a,t,null),e.renderBufferDirect(i,null,a,t,n,null),n.onAfterShadow(e,n,r,i,a,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)D(l[e],r,i,o,s,c)}function O(e){e.target.removeEventListener(`dispose`,O);for(let t in m){let n=m[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Ss(e,t){function n(){let t=!1,n=new Ne,r=null,i=new Ne(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ie(e.DEPTH_TEST):oe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=ae[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ie(e.STENCIL_TEST):oe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new _t(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,ee=e.getParameter(e.VERSION);ee.indexOf(`WebGL`)===-1?ee.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(ee)[1]),N=P>=1);let F=null,I={},te=e.getParameter(e.SCISSOR_BOX),L=e.getParameter(e.VIEWPORT),ne=new Ne().fromArray(te),re=new Ne().fromArray(L);function R(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let B={};B[e.TEXTURE_2D]=R(e.TEXTURE_2D,e.TEXTURE_2D,1),B[e.TEXTURE_CUBE_MAP]=R(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[e.TEXTURE_2D_ARRAY]=R(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),B[e.TEXTURE_3D]=R(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ie(e.DEPTH_TEST),o.setFunc(3),fe(!1),pe(1),ie(e.CULL_FACE),ue(0);function ie(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function oe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function se(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ce(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function le(t){return h!==t&&(e.useProgram(t),h=t,!0)}let V={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};V[103]=e.MIN,V[104]=e.MAX;let H={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ue(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(oe(e.BLEND),g=!1);else if(g===!1&&(ie(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:z(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:z(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:z(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:z(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(V[n],V[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(H[r],H[i],H[o],H[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function de(t,n){t.side===2?oe(e.CULL_FACE):ie(e.CULL_FACE);let r=t.side===1;n&&(r=!r),fe(r),t.blending===1&&t.transparent===!1?ue(0):ue(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),he(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ie(e.SAMPLE_ALPHA_TO_COVERAGE):oe(e.SAMPLE_ALPHA_TO_COVERAGE)}function fe(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function pe(t){t===0?oe(e.CULL_FACE):(ie(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function me(t){t!==k&&(N&&e.lineWidth(t),k=t)}function he(t,n,r){t?(ie(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):oe(e.POLYGON_OFFSET_FILL)}function U(t){t?ie(e.SCISSOR_TEST):oe(e.SCISSOR_TEST)}function ge(t){t===void 0&&(t=e.TEXTURE0+M-1),F!==t&&(e.activeTexture(t),F=t)}function W(t,n,r){r===void 0&&(r=F===null?e.TEXTURE0+M-1:F);let i=I[r];i===void 0&&(i={type:void 0,texture:void 0},I[r]=i),(i.type!==t||i.texture!==n)&&(F!==r&&(e.activeTexture(r),F=r),e.bindTexture(t,n||B[t]),i.type=t,i.texture=n)}function _e(){let t=I[F];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function ve(){try{e.compressedTexImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function G(){try{e.compressedTexImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function ye(){try{e.texSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function be(){try{e.texSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function xe(){try{e.compressedTexSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Se(){try{e.compressedTexSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ce(){try{e.texStorage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function we(){try{e.texStorage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Te(){try{e.texImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ee(){try{e.texImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function De(t){return d[t]===void 0?e.getParameter(t):d[t]}function Oe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function ke(t){ne.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ne.copy(t))}function Ae(t){re.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),re.copy(t))}function je(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Me(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function K(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},F=null,I={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new _t(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ne.set(0,0,e.canvas.width,e.canvas.height),re.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ie,disable:oe,bindFramebuffer:se,drawBuffers:ce,useProgram:le,setBlending:ue,setMaterial:de,setFlipSided:fe,setCullFace:pe,setLineWidth:me,setPolygonOffset:he,setScissorTest:U,activeTexture:ge,bindTexture:W,unbindTexture:_e,compressedTexImage2D:ve,compressedTexImage3D:G,texImage2D:Te,texImage3D:Ee,pixelStorei:Oe,getParameter:De,updateUBOMapping:je,uniformBlockBinding:Me,texStorage2D:Ce,texStorage3D:we,texSubImage2D:ye,texSubImage3D:be,compressedTexSubImage2D:xe,compressedTexSubImage3D:Se,scissor:ke,viewport:Ae,reset:K}}function Cs(o,s,c,l,u,d,f){let p=s.has(`WEBGL_multisampled_render_to_texture`)?s.get(`WEBGL_multisampled_render_to_texture`):null,m=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),h=new U,_=new WeakMap,v=new Set,y,b=new WeakMap,x=new Set,S=new FinalizationRegistry(e=>x.delete(e)),C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):I(`canvas`)}function T(e,t,n){let r=1,i=Ne(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);y===void 0&&(y=w(n,a));let o=t?w(n,a):y;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),R(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&R(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function D(e){o.generateMipmap(e)}function O(e){return e.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?o.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function k(e,t,n,r,i,a=!1){if(e!==null){if(o[e]!==void 0)return o[e];R(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let c;r&&(c=s.get(`EXT_texture_norm16`),c||R(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=t;if(t===o.RED&&(n===o.FLOAT&&(l=o.R32F),n===o.HALF_FLOAT&&(l=o.R16F),n===o.UNSIGNED_BYTE&&(l=o.R8),n===o.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),n===o.SHORT&&c&&(l=c.R16_SNORM_EXT)),t===o.RED_INTEGER&&(n===o.UNSIGNED_BYTE&&(l=o.R8UI),n===o.UNSIGNED_SHORT&&(l=o.R16UI),n===o.UNSIGNED_INT&&(l=o.R32UI),n===o.BYTE&&(l=o.R8I),n===o.SHORT&&(l=o.R16I),n===o.INT&&(l=o.R32I)),t===o.RG&&(n===o.FLOAT&&(l=o.RG32F),n===o.HALF_FLOAT&&(l=o.RG16F),n===o.UNSIGNED_BYTE&&(l=o.RG8),n===o.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),n===o.SHORT&&c&&(l=c.RG16_SNORM_EXT)),t===o.RG_INTEGER&&(n===o.UNSIGNED_BYTE&&(l=o.RG8UI),n===o.UNSIGNED_SHORT&&(l=o.RG16UI),n===o.UNSIGNED_INT&&(l=o.RG32UI),n===o.BYTE&&(l=o.RG8I),n===o.SHORT&&(l=o.RG16I),n===o.INT&&(l=o.RG32I)),t===o.RGB_INTEGER&&(n===o.UNSIGNED_BYTE&&(l=o.RGB8UI),n===o.UNSIGNED_SHORT&&(l=o.RGB16UI),n===o.UNSIGNED_INT&&(l=o.RGB32UI),n===o.BYTE&&(l=o.RGB8I),n===o.SHORT&&(l=o.RGB16I),n===o.INT&&(l=o.RGB32I)),t===o.RGBA_INTEGER&&(n===o.UNSIGNED_BYTE&&(l=o.RGBA8UI),n===o.UNSIGNED_SHORT&&(l=o.RGBA16UI),n===o.UNSIGNED_INT&&(l=o.RGBA32UI),n===o.BYTE&&(l=o.RGBA8I),n===o.SHORT&&(l=o.RGBA16I),n===o.INT&&(l=o.RGBA32I)),t===o.RGB&&(n===o.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),n===o.SHORT&&c&&(l=c.RGB16_SNORM_EXT),n===o.UNSIGNED_INT_5_9_9_9_REV&&(l=o.RGB9_E5),n===o.UNSIGNED_INT_10F_11F_11F_REV&&(l=o.R11F_G11F_B10F)),t===o.RGBA){let e=a?A:Ce.getTransfer(i);n===o.FLOAT&&(l=o.RGBA32F),n===o.HALF_FLOAT&&(l=o.RGBA16F),n===o.UNSIGNED_BYTE&&(l=e===`srgb`?o.SRGB8_ALPHA8:o.RGBA8),n===o.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),n===o.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),n===o.UNSIGNED_SHORT_4_4_4_4&&(l=o.RGBA4),n===o.UNSIGNED_SHORT_5_5_5_1&&(l=o.RGB5_A1)}return(l===o.R16F||l===o.R32F||l===o.RG16F||l===o.RG32F||l===o.RGBA16F||l===o.RGBA32F)&&s.get(`EXT_color_buffer_float`),l}function j(e,t){let n;return e?t===null||t===1014||t===1020?n=o.DEPTH24_STENCIL8:t===1015?n=o.DEPTH32F_STENCIL8:t===1012&&(n=o.DEPTH24_STENCIL8,R(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=o.DEPTH_COMPONENT24:t===1015?n=o.DEPTH_COMPONENT32F:t===1012&&(n=o.DEPTH_COMPONENT16),n}function M(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function N(e){let t=new WeakRef(e);l.get(e).__ref=t,x.add(t),S.register(e,t,t)}function P(e){let t=l.get(e).__ref;t!==void 0&&(x.delete(t),S.unregister(t))}function ee(e){te(e.target)}function F(e){L(e.target)}function te(e){e.removeEventListener(`dispose`,ee),P(e),re(e),e.isVideoTexture&&_.delete(e),e.isHTMLTexture&&v.delete(e)}function L(e){e.removeEventListener(`dispose`,F),P(e),ie(e)}function ne(){for(let e of x){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?L(t):te(t))}x.clear(),v.clear()}function re(e){let t=l.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=b.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&B(e),Object.keys(r).length===0&&b.delete(n)}l.remove(e)}function B(e){let t=l.get(e);o.deleteTexture(t.__webglTexture);let n=e.source,r=b.get(n);delete r[t.__cacheKey],f.memory.textures--}function ie(e){let t=l.get(e);t.__depthDisposeCallback&&t.__depthDisposeCallback();let n=e.depthTexture;if(n&&n.renderTarget===e&&te(n),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)o.deleteFramebuffer(t.__webglFramebuffer[e][n]);else o.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&o.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)o.deleteFramebuffer(t.__webglFramebuffer[e]);else o.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&o.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&o.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&o.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&o.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let r=e.textures;for(let e=0,t=r.length;e<t;e++){let t=l.get(r[e]);t.__webglTexture&&(o.deleteTexture(t.__webglTexture),f.memory.textures--),l.remove(r[e])}l.remove(e)}let ae=0;function oe(){ae=0}function se(){return ae}function ce(e){ae=e}function le(){let e=ae;return e>=u.maxTextures&&R(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+u.maxTextures),ae+=1,e}function V(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function H(e,t){let n=l.get(e);if(e.isVideoTexture&&Me(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)R(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)R(`WebGLRenderer: Texture marked for update but image is incomplete`);else{G(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);c.bindTexture(o.TEXTURE_2D,n.__webglTexture,o.TEXTURE0+t)}function ue(e,t){let n=l.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?G(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),c.bindTexture(o.TEXTURE_2D_ARRAY,n.__webglTexture,o.TEXTURE0+t))}function de(e,t){let n=l.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?G(n,e,t):c.bindTexture(o.TEXTURE_3D,n.__webglTexture,o.TEXTURE0+t)}function fe(e,t){let n=l.get(e);e.version>0&&n.__version!==e.version?ye(n,e,t):c.bindTexture(o.TEXTURE_CUBE_MAP,n.__webglTexture,o.TEXTURE0+t)}let pe={[e]:o.REPEAT,[t]:o.CLAMP_TO_EDGE,[n]:o.MIRRORED_REPEAT},me={[r]:o.NEAREST,1004:o.NEAREST_MIPMAP_NEAREST,1005:o.NEAREST_MIPMAP_LINEAR,[i]:o.LINEAR,1007:o.LINEAR_MIPMAP_NEAREST,[a]:o.LINEAR_MIPMAP_LINEAR},he={512:o.NEVER,519:o.ALWAYS,513:o.LESS,515:o.LEQUAL,514:o.EQUAL,518:o.GEQUAL,516:o.GREATER,517:o.NOTEQUAL};function ge(e,t){if(t.type===1015&&s.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&R(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),o.texParameteri(e,o.TEXTURE_WRAP_S,pe[t.wrapS]),o.texParameteri(e,o.TEXTURE_WRAP_T,pe[t.wrapT]),(e===o.TEXTURE_3D||e===o.TEXTURE_2D_ARRAY)&&o.texParameteri(e,o.TEXTURE_WRAP_R,pe[t.wrapR]),o.texParameteri(e,o.TEXTURE_MAG_FILTER,me[t.magFilter]),o.texParameteri(e,o.TEXTURE_MIN_FILTER,me[t.minFilter]),t.compareFunction&&(o.texParameteri(e,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(e,o.TEXTURE_COMPARE_FUNC,he[t.compareFunction])),s.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&s.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||l.get(t).__currentAnisotropy){let n=s.get(`EXT_texture_filter_anisotropic`);o.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,u.getMaxAnisotropy())),l.get(t).__currentAnisotropy=t.anisotropy}}}function W(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,ee),N(t));let r=t.source,i=b.get(r);i===void 0&&(i={},b.set(r,i));let a=V(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&B(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function _e(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ve(e,t,n,r){let i=e.updateRanges;if(i.length===0)c.texSubImage2D(o.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=_e(r.start,t.width,4),c=_e(n.start,t.width,4);r.start<=o+1&&s===c&&_e(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let s=c.getParameter(o.UNPACK_ROW_LENGTH),l=c.getParameter(o.UNPACK_SKIP_PIXELS),u=c.getParameter(o.UNPACK_SKIP_ROWS);c.pixelStorei(o.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],s=Math.floor(a.start/4),l=Math.ceil(a.count/4),u=s%t.width,d=Math.floor(s/t.width),f=l;c.pixelStorei(o.UNPACK_SKIP_PIXELS,u),c.pixelStorei(o.UNPACK_SKIP_ROWS,d),c.texSubImage2D(o.TEXTURE_2D,0,u,d,f,1,n,r,t.data)}e.clearUpdateRanges(),c.pixelStorei(o.UNPACK_ROW_LENGTH,s),c.pixelStorei(o.UNPACK_SKIP_PIXELS,l),c.pixelStorei(o.UNPACK_SKIP_ROWS,u)}}function G(e,t,n){let r=o.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=o.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=o.TEXTURE_3D);let i=W(e,t),a=t.source;c.bindTexture(r,e.__webglTexture,o.TEXTURE0+n);let s=l.get(a);if(a.version!==s.__version||i===!0){if(c.activeTexture(o.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=Ce.getPrimaries(Ce.workingColorSpace),n=t.colorSpace===``?null:Ce.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?o.NONE:o.BROWSER_DEFAULT_WEBGL;c.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,t.flipY),c.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),c.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}c.pixelStorei(o.UNPACK_ALIGNMENT,t.unpackAlignment);let e=T(t.image,!1,u.maxTextureSize);e=K(t,e);let l=d.convert(t.format,t.colorSpace),f=d.convert(t.type),p=k(t.internalFormat,l,f,t.normalized,t.colorSpace,t.isVideoTexture);ge(r,t);let m,h=t.mipmaps,_=t.isVideoTexture!==!0,y=s.__version===void 0||i===!0,b=a.dataReady,x=M(t,e);if(t.isDepthTexture)p=j(t.format===g,t.type),y&&(_?c.texStorage2D(o.TEXTURE_2D,1,p,e.width,e.height):c.texImage2D(o.TEXTURE_2D,0,p,e.width,e.height,0,l,f,null));else if(t.isDataTexture){if(h.length>0){_&&y&&c.texStorage2D(o.TEXTURE_2D,x,p,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)m=h[e],_?b&&c.texSubImage2D(o.TEXTURE_2D,e,0,0,m.width,m.height,l,f,m.data):c.texImage2D(o.TEXTURE_2D,e,p,m.width,m.height,0,l,f,m.data);t.generateMipmaps=!1}else _?(y&&c.texStorage2D(o.TEXTURE_2D,x,p,e.width,e.height),b&&ve(t,e,l,f)):c.texImage2D(o.TEXTURE_2D,0,p,e.width,e.height,0,l,f,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){_&&y&&c.texStorage3D(o.TEXTURE_2D_ARRAY,x,p,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(m=h[n],t.format!==1023){if(l!==null){if(_){if(b){if(t.layerUpdates.size>0){let e=wi(m.width,m.height,t.format,t.type);for(let r of t.layerUpdates){let t=m.data.subarray(r*e/m.data.BYTES_PER_ELEMENT,(r+1)*e/m.data.BYTES_PER_ELEMENT);c.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,n,0,0,r,m.width,m.height,1,l,t)}}else c.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,n,0,0,0,m.width,m.height,e.depth,l,m.data)}}else c.compressedTexImage3D(o.TEXTURE_2D_ARRAY,n,p,m.width,m.height,e.depth,0,m.data,0,0)}else R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?b&&c.texSubImage3D(o.TEXTURE_2D_ARRAY,n,0,0,0,m.width,m.height,e.depth,l,f,m.data):c.texImage3D(o.TEXTURE_2D_ARRAY,n,p,m.width,m.height,e.depth,0,l,f,m.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{_&&y&&c.texStorage2D(o.TEXTURE_2D,x,p,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)m=h[e],t.format===1023?_?b&&c.texSubImage2D(o.TEXTURE_2D,e,0,0,m.width,m.height,l,f,m.data):c.texImage2D(o.TEXTURE_2D,e,p,m.width,m.height,0,l,f,m.data):l===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?b&&c.compressedTexSubImage2D(o.TEXTURE_2D,e,0,0,m.width,m.height,l,m.data):c.compressedTexImage2D(o.TEXTURE_2D,e,p,m.width,m.height,0,m.data)}}else if(t.isDataArrayTexture){if(_){if(y&&c.texStorage3D(o.TEXTURE_2D_ARRAY,x,p,e.width,e.height,e.depth),b){if(t.layerUpdates.size>0){let n=wi(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);c.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,l,f,t)}t.clearLayerUpdates()}else c.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,l,f,e.data)}}else c.texImage3D(o.TEXTURE_2D_ARRAY,0,p,e.width,e.height,e.depth,0,l,f,e.data)}else if(t.isData3DTexture)_?(y&&c.texStorage3D(o.TEXTURE_3D,x,p,e.width,e.height,e.depth),b&&c.texSubImage3D(o.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,l,f,e.data)):c.texImage3D(o.TEXTURE_3D,0,p,e.width,e.height,e.depth,0,l,f,e.data);else if(t.isFramebufferTexture){if(y){if(_)c.texStorage2D(o.TEXTURE_2D,x,p,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<x;e++)c.texImage2D(o.TEXTURE_2D,e,p,t,n,0,l,f,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in o){let n=o.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),v.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of v)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,e);else{let t=o.RGBA,n=o.RGBA,r=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,t,n,r,e)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(h.length>0){if(_&&y){let e=Ne(h[0]);c.texStorage2D(o.TEXTURE_2D,x,p,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)m=h[e],_?b&&c.texSubImage2D(o.TEXTURE_2D,e,0,0,l,f,m):c.texImage2D(o.TEXTURE_2D,e,p,l,f,m);t.generateMipmaps=!1}else if(_){if(y){let t=Ne(e);c.texStorage2D(o.TEXTURE_2D,x,p,t.width,t.height)}b&&c.texSubImage2D(o.TEXTURE_2D,0,0,0,l,f,e)}else c.texImage2D(o.TEXTURE_2D,0,p,l,f,e);E(t)&&t.mipmapsAutoUpdate===!0&&D(r),s.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function ye(e,t,n){if(t.image.length!==6)return;let r=W(e,t),i=t.source;c.bindTexture(o.TEXTURE_CUBE_MAP,e.__webglTexture,o.TEXTURE0+n);let a=l.get(i);if(i.version!==a.__version||r===!0){c.activeTexture(o.TEXTURE0+n);let e=Ce.getPrimaries(Ce.workingColorSpace),s=t.colorSpace===``?null:Ce.getPrimaries(t.colorSpace),l=t.colorSpace===``||e===s?o.NONE:o.BROWSER_DEFAULT_WEBGL;c.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,t.flipY),c.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),c.pixelStorei(o.UNPACK_ALIGNMENT,t.unpackAlignment),c.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,l);let f=t.isCompressedTexture||t.image[0].isCompressedTexture,p=t.image[0]&&t.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=T(t.image[e],!0,u.maxCubemapSize):m[e]=p?t.image[e].image:t.image[e],m[e]=K(t,m[e]);let h=m[0],_=d.convert(t.format,t.colorSpace),v=d.convert(t.type),y=k(t.internalFormat,_,v,t.normalized,t.colorSpace),b=t.isVideoTexture!==!0,x=a.__version===void 0||r===!0,S=i.dataReady,C=M(t,h);ge(o.TEXTURE_CUBE_MAP,t);let w;if(t.isDepthTexture){if(y=j(t.format===g,t.type),x){if(b)c.texStorage2D(o.TEXTURE_CUBE_MAP,1,y,h.width,h.height);else for(let e=0;e<6;e++)c.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,y,h.width,h.height,0,_,v,null)}}else if(f){b&&x&&c.texStorage2D(o.TEXTURE_CUBE_MAP,C,y,h.width,h.height);for(let e=0;e<6;e++){w=m[e].mipmaps;for(let n=0;n<w.length;n++){let r=w[n];t.format===1023?b?S&&c.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,_,v,r.data):c.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,y,r.width,r.height,0,_,v,r.data):_===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):b?S&&c.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,_,r.data):c.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,y,r.width,r.height,0,r.data)}}}else{if(w=t.mipmaps,b&&x){w.length>0&&C++;let e=Ne(m[0]);c.texStorage2D(o.TEXTURE_CUBE_MAP,C,y,e.width,e.height)}for(let e=0;e<6;e++)if(p){b?S&&c.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,m[e].width,m[e].height,_,v,m[e].data):c.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,y,m[e].width,m[e].height,0,_,v,m[e].data);for(let t=0;t<w.length;t++){let n=w[t].image[e].image;b?S&&c.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,_,v,n.data):c.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,y,n.width,n.height,0,_,v,n.data)}}else{b?S&&c.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,_,v,m[e]):c.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,y,_,v,m[e]);for(let t=0;t<w.length;t++){let n=w[t];b?S&&c.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,_,v,n.image[e]):c.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,y,_,v,n.image[e])}}}E(t)&&t.mipmapsAutoUpdate===!0&&D(o.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function be(e,t,n,r,i,a){let s=d.convert(n.format,n.colorSpace),u=d.convert(n.type),f=k(n.internalFormat,s,u,n.normalized,n.colorSpace),m=l.get(t),h=l.get(n);if(h.__renderTarget=t,!m.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===o.TEXTURE_3D||i===o.TEXTURE_2D_ARRAY?c.texImage3D(i,a,f,e,n,t.depth,0,s,u,null):c.texImage2D(i,a,f,e,n,0,s,u,null)}c.bindFramebuffer(o.FRAMEBUFFER,e),je(t)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,r,i,h.__webglTexture,0,Ae(t)):(i===o.TEXTURE_2D||i>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,r,i,h.__webglTexture,a),c.bindFramebuffer(o.FRAMEBUFFER,null)}function xe(e,t,n){if(o.bindRenderbuffer(o.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=j(t.stencilBuffer,i),s=t.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;je(t)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ae(t),a,t.width,t.height):n?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ae(t),a,t.width,t.height):o.renderbufferStorage(o.RENDERBUFFER,a,t.width,t.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,s,o.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=d.convert(i.format,i.colorSpace),s=d.convert(i.type),c=k(i.internalFormat,a,s,i.normalized,i.colorSpace);je(t)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ae(t),c,t.width,t.height):n?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ae(t),c,t.width,t.height):o.renderbufferStorage(o.RENDERBUFFER,c,t.width,t.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Se(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(c.bindFramebuffer(o.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=l.get(t.depthTexture);i.__renderTarget=t;let a=r?t.depthTexture.image[0]:t.depthTexture.image;i.__webglTexture&&a.width===t.width&&a.height===t.height||(a.width=t.width,a.height=t.height,t.depthTexture.needsUpdate=!0),r?fe(t.depthTexture,0):H(t.depthTexture,0);let s=i.__webglTexture,u=Ae(t),d=r?o.TEXTURE_CUBE_MAP_POSITIVE_X+n:o.TEXTURE_2D,f=t.depthTexture.format===1027?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)je(t)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,f,d,s,0,u):o.framebufferTexture2D(o.FRAMEBUFFER,f,d,s,0);else if(t.depthTexture.format===1027)je(t)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,f,d,s,0,u):o.framebufferTexture2D(o.FRAMEBUFFER,f,d,s,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function we(e){let t=l.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)Se(t.__webglFramebuffer[n],e,n);else e.texture.mipmaps.length>0?Se(t.__webglFramebuffer[0],e,0):Se(t.__webglFramebuffer,e,0)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(c.bindFramebuffer(o.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=o.createRenderbuffer(),xe(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];o.bindRenderbuffer(o.RENDERBUFFER,i),o.framebufferRenderbuffer(o.FRAMEBUFFER,r,o.RENDERBUFFER,i)}}else if(e.texture.mipmaps.length>0?c.bindFramebuffer(o.FRAMEBUFFER,t.__webglFramebuffer[0]):c.bindFramebuffer(o.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=o.createRenderbuffer(),xe(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,r),o.framebufferRenderbuffer(o.FRAMEBUFFER,n,o.RENDERBUFFER,r)}c.bindFramebuffer(o.FRAMEBUFFER,null)}function Te(e,t,n){let r=l.get(e);t!==void 0&&be(r.__webglFramebuffer,e,e.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),n!==void 0&&we(e)}function Ee(e){let t=e.texture,n=l.get(e),r=l.get(t);e.addEventListener(`dispose`,F),N(e);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,s=i.length>1;if(s||(r.__webglTexture===void 0&&(r.__webglTexture=o.createTexture()),r.__version=t.version,f.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=o.createFramebuffer()}else n.__webglFramebuffer[e]=o.createFramebuffer()}else{if(t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=o.createFramebuffer()}else n.__webglFramebuffer=o.createFramebuffer();if(s)for(let e=0,t=i.length;e<t;e++){let t=l.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=o.createTexture(),f.memory.textures++)}if(e.samples>0&&je(e)===!1){n.__webglMultisampledFramebuffer=o.createFramebuffer(),n.__webglColorRenderbuffer=[],c.bindFramebuffer(o.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=d.convert(r.format,r.colorSpace),s=d.convert(r.type),c=k(r.internalFormat,a,s,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),l=Ae(e);o.renderbufferStorageMultisample(o.RENDERBUFFER,l,c,e.width,e.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+t,o.RENDERBUFFER,n.__webglColorRenderbuffer[t])}o.bindRenderbuffer(o.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=o.createRenderbuffer(),xe(n.__webglDepthRenderbuffer,e,!0)),c.bindFramebuffer(o.FRAMEBUFFER,null)}}if(a){c.bindTexture(o.TEXTURE_CUBE_MAP,r.__webglTexture),ge(o.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)be(n.__webglFramebuffer[r][i],e,t,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else be(n.__webglFramebuffer[r],e,t,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);E(t)?D(o.TEXTURE_CUBE_MAP):t.mipmaps.length>0&&o.texParameteri(o.TEXTURE_CUBE_MAP,o.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),c.unbindTexture()}else if(s){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=l.get(r),s=o.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(s=e.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),c.bindTexture(s,a.__webglTexture),ge(s,r),be(n.__webglFramebuffer,e,r,o.COLOR_ATTACHMENT0+t,s,0),E(r)&&D(s)}c.unbindTexture()}else{let i=o.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),c.bindTexture(i,r.__webglTexture),ge(i,t),t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)be(n.__webglFramebuffer[r],e,t,o.COLOR_ATTACHMENT0,i,r);else be(n.__webglFramebuffer,e,t,o.COLOR_ATTACHMENT0,i,0);E(t)?D(i):t.mipmaps.length>0&&o.texParameteri(i,o.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),c.unbindTexture()}e.depthBuffer&&we(e)}function De(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(E(r)&&r.mipmapsAutoUpdate===!0){let t=O(e),n=l.get(r).__webglTexture;c.bindTexture(t,n),D(t),c.unbindTexture()}}}let Oe=[];function ke(e){if(e.samples>0){if(je(e)===!1){let t=e.textures,n=e.width,r=e.height,i=o.COLOR_BUFFER_BIT,a=e.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,s=l.get(e),u=t.length>1;if(u)for(let e=0;e<t.length;e++)c.bindFramebuffer(o.FRAMEBUFFER,s.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+e,o.RENDERBUFFER,null),c.bindFramebuffer(o.FRAMEBUFFER,s.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+e,o.TEXTURE_2D,null,0);c.bindFramebuffer(o.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.texture.mipmaps.length>0?c.bindFramebuffer(o.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):c.bindFramebuffer(o.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=o.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=o.STENCIL_BUFFER_BIT)),u){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,s.__webglColorRenderbuffer[c]);let e=l.get(t[c]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,e,0)}o.blitFramebuffer(0,0,n,r,0,0,n,r,i,o.NEAREST),m===!0&&(Oe.length=0,Oe.push(o.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&Oe.push(a),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Oe))}if(c.bindFramebuffer(o.READ_FRAMEBUFFER,null),c.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),u)for(let e=0;e<t.length;e++){c.bindFramebuffer(o.FRAMEBUFFER,s.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+e,o.RENDERBUFFER,s.__webglColorRenderbuffer[e]);let n=l.get(t[e]).__webglTexture;c.bindFramebuffer(o.FRAMEBUFFER,s.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+e,o.TEXTURE_2D,n,0)}c.bindFramebuffer(o.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&m){let t=e.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[t])}}}function Ae(e){return Math.min(u.maxSamples,e.samples)}function je(e){let t=l.get(e);return e.samples>0&&s.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function Me(e){let t=f.render.frame;_.get(e)!==t&&(_.set(e,t),e.update())}function K(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Ce.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&R(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):z(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ne(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(h.width=e.naturalWidth||e.width,h.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(h.width=e.displayWidth,h.height=e.displayHeight):(h.width=e.width,h.height=e.height),h}this.allocateTextureUnit=le,this.resetTextureUnits=oe,this.getTextureUnits=se,this.setTextureUnits=ce,this.setTexture2D=H,this.setTexture2DArray=ue,this.setTexture3D=de,this.setTextureCube=fe,this.rebindTextures=Te,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=be,this.useMultisampledRTT=je,this.dispose=ne}function ws(e,t){function n(n,r=``){let i,a=Ce.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Ts=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Es=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ds=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new lr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Er({vertexShader:Ts,fragmentShader:Es,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Hn(new gr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Os=class extends oe{constructor(e,t){super();let n=this,r=null,i=1,a=null,s=`local-floor`,l=1,u=null,d=null,f=null,_=null,v=null,y=null,b=typeof XRWebGLBinding<`u`,x=new Ds,S={},C=t.getContextAttributes(),w=null,T=null,E=[],D=[],O=new U,k=null,A=null,j=new ri;j.viewport=new Ne;let M=new ri;M.viewport=new Ne;let N=[j,M],P=new li,ee=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=E[e];return t===void 0&&(t=new ft,E[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=E[e];return t===void 0&&(t=new ft,E[e]=t),t.getGripSpace()},this.getHand=function(e){let t=E[e];return t===void 0&&(t=new ft,E[e]=t),t.getHandSpace()};function I(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=E[t];n!==void 0&&(n.update(e.inputSource,e.frame,u||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function te(){r.removeEventListener(`select`,I),r.removeEventListener(`selectstart`,I),r.removeEventListener(`selectend`,I),r.removeEventListener(`squeeze`,I),r.removeEventListener(`squeezestart`,I),r.removeEventListener(`squeezeend`,I),r.removeEventListener(`end`,te),r.removeEventListener(`inputsourceschange`,L);for(let e=0;e<E.length;e++){let t=D[e];t!==null&&(D[e]=null,E[e].disconnect(t))}ee=null,F=null,x.reset();for(let e in S)delete S[e];if(e.setRenderTarget(w),v=null,_=null,f=null,r=null,T=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){s=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(e){u=e},this.getBaseLayer=function(){return _===null?v:_},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(d){if(r=d,r!==null){if(w=e.getRenderTarget(),r.addEventListener(`select`,I),r.addEventListener(`selectstart`,I),r.addEventListener(`selectend`,I),r.addEventListener(`squeeze`,I),r.addEventListener(`squeezestart`,I),r.addEventListener(`squeezeend`,I),r.addEventListener(`end`,te),r.addEventListener(`inputsourceschange`,L),C.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),b&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,s=null;C.depth&&(s=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=C.stencil?g:h,a=C.stencil?p:c);let l={colorFormat:t.RGBA8,depthFormat:s,scaleFactor:i};f=this.getBinding(),_=f.createProjectionLayer(l),r.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),T=new Fe(_.textureWidth,_.textureHeight,{format:m,type:o,depthTexture:new sr(_.textureWidth,_.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{let n={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:i};v=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),T=new Fe(v.framebufferWidth,v.framebufferHeight,{format:m,type:o,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(s),ie.setContext(r),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function L(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,E[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<E.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=E[r];i&&i.connect(n)}}function ne(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;x.texture!==null&&(x.depthNear>0&&(t=x.depthNear),x.depthFar>0&&(n=x.depthFar)),P.near=M.near=j.near=t,P.far=M.far=j.far=n,(ee!==P.near||F!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),ee=P.near,F=P.far),P.layers.mask=e.layers.mask|6,j.layers.mask=P.layers.mask&-5,M.layers.mask=P.layers.mask&-3;let i=e.parent,a=P.cameras;ne(P,i);for(let e=0;e<a.length;e++)ne(a[e],i);P.projectionMatrix.copy(j.projectionMatrix),P.projectionMatrixInverse.copy(j.projectionMatrixInverse),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),re(e,P,i)};function re(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=le*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(_!==null||v!==null)return l},this.setFoveation=function(e){l=e,_!==null&&(_.fixedFoveation=e),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=e)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(P)},this.getCameraTexture=function(e){return S[e]};let z=null;function B(t,i){if(d=i.getViewerPose(u||a),y=i,d!==null){let t=d.views;v!==null&&(e.setRenderTargetFramebuffer(T,v.framebuffer),e.setRenderTarget(T));let i=!1;t.length!==P.cameras.length&&(P.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(v!==null)a=v.getViewport(r);else{let t=f.getViewSubImage(_,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(T,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(T))}let o=N[n];o===void 0&&(o=new ri,o.layers.enable(n),o.viewport=new Ne,N[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(P.matrix.copy(o.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),i===!0&&P.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&b){f=n.getBinding();let e=f.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&x.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&b){e.state.unbindTexture(),f=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=S[n];e||(e=new lr,S[n]=e);let t=f.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<E.length;e++){let t=D[e],n=E[e];t!==null&&n!==void 0&&n.update(t,i,u||a)}z&&z(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),y=null}let ie=new Ei;ie.setAnimationLoop(B),this.setAnimationLoop=function(e){z=e},this.dispose=function(){}}},ks=new Re,As=new G;As.set(-1,0,0,0,1,0,0,0,1);function js(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Sr(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(ks.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(As),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Ms(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?R(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):R(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var Ns=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ps=null;function Fs(){return Ps===null&&(Ps=new Gn(Ns,16,16,v,u),Ps.name=`DFG_LUT`,Ps.minFilter=i,Ps.magFilter=i,Ps.wrapS=t,Ps.wrapT=t,Ps.generateMipmaps=!1,Ps.needsUpdate=!0),Ps}var Is=class{constructor(e={}){let{canvas:t=te(),context:n=null,depth:r=!0,stencil:i=!1,alpha:l=!1,antialias:m=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:g=!1,powerPreference:v=`default`,failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:S=!1,outputBufferType:C=o}=e;this.isWebGLRenderer=!0;let w;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);w=n.getContextAttributes().alpha}else w=l;let T=C,E=new Set([b,y,_]),D=new Set([o,c,s,p,d,f]),k=new Uint32Array(4),A=new Int32Array(4),j={textures:[],min:[],max:[],resolution:[]},M=null,N=null,ee=[],F=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,re=!1,B=null,ae=null,oe=null,se=null;this._outputColorSpace=O;let ce=0,le=0,V=null,H=-1,ue=null,de=new Ne,fe=new Ne,pe=null,me=new _t(0),he=0,U=t.width,ge=t.height,_e=1,ve=null,G=null,ye=new Ne(0,0,U,ge),be=new Ne(0,0,U,ge),xe=!1,Se=new Xn,we=new Qn,Te=!1,Ee=!1,De=new Re,Oe=new W,ke=new Ne,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function Me(){return V===null?_e:1}let K=n;function Pe(e,n){return t.getContext(e,n)}let Ie,Le,q,ze,J,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt;try{let e={alpha:!0,depth:r,stencil:i,antialias:m,premultipliedAlpha:h,preserveDrawingBuffer:g,powerPreference:v,failIfMajorPerformanceCaveat:x};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,ot,!1),t.addEventListener(`webglcontextrestored`,st,!1),t.addEventListener(`webglcontextcreationerror`,ct,!1),K===null){let t=`webgl2`;if(K=Pe(t,e),K===null)throw Pe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}it()}catch(e){throw t.removeEventListener(`webglcontextlost`,ot,!1),t.removeEventListener(`webglcontextrestored`,st,!1),t.removeEventListener(`webglcontextcreationerror`,ct,!1),z(`WebGLRenderer: `+e.message),e}function it(){Ie=new ta(K),Ie.init(),tt=new ws(K,Ie),Le=new Fi(K,Ie,e,tt),q=new Ss(K,Ie),Le.reversedDepthBuffer&&S&&q.buffers.depth.setReversed(!0),ae=K.createFramebuffer(),oe=K.createFramebuffer(),se=K.createFramebuffer(),ze=new ia(K),J=new ns,Be=new Cs(K,Ie,q,J,Le,tt,ze),Ve=new ea(L),He=new Di(K),nt=new Ni(K,He),Ue=new na(K,He,ze,nt),We=new oa(K,Ue,He,nt,ze),Qe=new aa(K,Le,Be),Ye=new Ii(J),Ge=new ts(L,Ve,Ie,Le,nt,Ye),Ke=new js(L,J),qe=new os,Je=new ps(Ie),Ze=new Mi(L,Ve,q,We,w,h),Xe=new xs(L,We,Le),rt=new Ms(K,ze,Le,q),$e=new Pi(K,Ie,ze),et=new ra(K,Ie,ze),ze.programs=Ge.programs,L.capabilities=Le,L.extensions=Ie,L.properties=J,L.renderLists=qe,L.shadowMap=Xe,L.state=q,L.info=ze}T!==1009&&(I=new ca(T,t.width,t.height,m,r,i));let at=new Os(L,K);this.xr=at,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(e){e!==void 0&&(_e=e,this.setSize(U,ge,!1))},this.getSize=function(e){return e.set(U,ge)},this.setSize=function(e,n,r=!0){at.isPresenting?R(`WebGLRenderer: Can't change size while VR device is presenting.`):(U=e,ge=n,t.width=Math.floor(e*_e),t.height=Math.floor(n*_e),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(U*_e,ge*_e).floor()},this.setDrawingBufferSize=function(e,n,r){U=e,ge=n,_e=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(T===1009)z(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){R(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}I.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(de)},this.getViewport=function(e){return e.copy(ye)},this.setViewport=function(e,t,n,r){e.isVector4?ye.set(e.x,e.y,e.z,e.w):ye.set(e,t,n,r),q.viewport(de.copy(ye).multiplyScalar(Me()).round())},this.getScissor=function(e){return e.copy(be)},this.setScissor=function(e,t,n,r){e.isVector4?be.set(e.x,e.y,e.z,e.w):be.set(e,t,n,r),q.scissor(fe.copy(be).multiplyScalar(Me()).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(e){q.setScissorTest(xe=e)},this.setOpaqueSort=function(e){ve=e},this.setTransparentSort=function(e){G=e},this.getClearColor=function(e){return e.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(V!==null){let t=V.texture.format;e=E.has(t)}if(e){let e=V.texture.type,t=D.has(e),n=Ze.getClearColor(),r=Ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(k[0]=i,k[1]=a,k[2]=o,k[3]=r,K.clearBufferuiv(K.COLOR,0,k)):(A[0]=i,A[1]=a,A[2]=o,A[3]=r,K.clearBufferiv(K.COLOR,0,A))}else r|=K.COLOR_BUFFER_BIT}t&&(r|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&K.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),B=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ot,!1),t.removeEventListener(`webglcontextrestored`,st,!1),t.removeEventListener(`webglcontextcreationerror`,ct,!1),Ze.dispose(),qe.dispose(),Je.dispose(),Be.dispose(),J.dispose(),Ve.dispose(),We.dispose(),Ue.dispose(),nt.dispose(),rt.dispose(),Ge.dispose(),at.dispose(),at.removeEventListener(`sessionstart`,ht),at.removeEventListener(`sessionend`,gt),vt.stop()};function ot(e){e.preventDefault(),ne(`WebGLRenderer: Context Lost.`),re=!0}function st(){ne(`WebGLRenderer: Context Restored.`),re=!1;let e=ze.autoReset,t=Xe.enabled,n=Xe.autoUpdate,r=Xe.needsUpdate,i=Xe.type;it(),ze.autoReset=e,Xe.enabled=t,Xe.autoUpdate=n,Xe.needsUpdate=r,Xe.type=i}function ct(e){z(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function lt(e){let t=e.target;t.removeEventListener(`dispose`,lt),ut(t)}function ut(e){dt(e),J.remove(e)}function dt(e){let t=J.get(e).programs;t!==void 0&&(t.forEach(function(e){Ge.releaseProgram(e)}),e.isShaderMaterial&&Ge.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ae);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=kt(e,t,n,r,i);q.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ue.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;nt.setup(i,r,s,n,c);let h,g=$e;if(c!==null&&(h=He.get(c),g=et,g.setIndex(h)),i.isMesh)r.wireframe===!0?(q.setLineWidth(r.wireframeLinewidth*Me()),g.setMode(K.LINES)):g.setMode(K.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),q.setLineWidth(e*Me()),i.isLineSegments?g.setMode(K.LINES):i.isLineLoop?g.setMode(K.LINE_LOOP):g.setMode(K.LINE_STRIP)}else i.isPoints?g.setMode(K.POINTS):i.isSprite&&g.setMode(K.TRIANGLES);if(i.isBatchedMesh){if(Ie.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?He.get(c).bytesPerElement:1,o=J.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(K,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ft(e,t,n,r){B!==null&&e.isNodeMaterial&&B.setObject(r,e),Te===!0&&Ye.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Tt(e,t,r),e.side=0,e.needsUpdate=!0,Tt(e,t,r),e.side=2):Tt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),B!==null&&B.renderStart(e,t,n),N=Je.get(n),N.init(t),F.push(N),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(N.pushLight(e),e.castShadow&&N.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(N.pushLight(e),e.castShadow&&N.pushShadow(e))}),N.setupLights(),B!==null&&B.updateLights(N.state.lightsArray),Ee=this.localClippingEnabled,Te=Ye.init(this.clippingPlanes,Ee),Te===!0&&Ye.setGlobalState(this.clippingPlanes,t),B!==null&&Xe.render(N.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ft(o,n,t,e),r.add(o)}else ft(i,n,t,e),r.add(i)}}),N=F.pop(),B!==null&&B.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=J.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ie.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let pt=null;function mt(e){pt&&pt(e)}function ht(){vt.stop()}function gt(){vt.start()}let vt=new Ei;vt.setAnimationLoop(mt),typeof self<`u`&&vt.setContext(self),this.setAnimationLoop=function(e){pt=e,at.setAnimationLoop(e),e===null?vt.stop():vt.start()},at.addEventListener(`sessionstart`,ht),at.addEventListener(`sessionend`,gt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){z(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(re===!0)return;B!==null&&B.renderStart(e,t);let n=at.enabled===!0&&at.isPresenting===!0,r=I!==null&&(V===null||n)&&I.begin(L,V);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(t),t=at.getCamera()),e.isScene===!0&&e.onBeforeRender(L,e,t,V),N=Je.get(e,F.length),N.init(t),N.state.textureUnits=Be.getTextureUnits(),F.push(N),De.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?we.setFromArrayCamera(t):Se.setFromProjectionMatrix(De,P,t.reversedDepth),Ee=this.localClippingEnabled,Te=Ye.init(this.clippingPlanes,Ee),M=qe.get(e,ee.length),M.init(),ee.push(M),this.info.render.frame++,at.enabled===!0&&at.isPresenting===!0){let e=L.xr.getDepthSensingMesh();e!==null&&yt(e,t,-1/0,L.sortObjects)}yt(e,t,0,L.sortObjects),M.finish(),B!==null&&B.updateLights(N.state.lightsArray),L.sortObjects===!0&&M.sort(ve,G),je=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,je&&Ze.addToRenderList(M,e),this.info.autoReset===!0&&this.info.reset(),Te===!0&&Ye.beginShadows();let i=N.state.shadowsArray;if(Xe.render(i,e,t),Te===!0&&Ye.endShadows(),(r&&I.hasRenderPass())===!1){let n=M.opaque,r=M.transmissive;if(N.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];xt(n,r,e,a)}je&&Ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];bt(M,e,n,n.viewport)}}else r.length>0&&xt(n,r,e,t),je&&Ze.render(e),bt(M,e,t)}V!==null&&le===0&&(Be.updateMultisampleRenderTarget(V),Be.updateRenderTargetMipmap(V)),r&&I.end(L),e.isScene===!0&&e.onAfterRender(L,e,t),nt.resetDefaultState(),H=-1,ue=null,F.pop(),F.length>0?(N=F[F.length-1],Be.setTextureUnits(N.state.textureUnits),Te===!0&&Ye.setGlobalState(L.clippingPlanes,N.state.camera)):N=null,ee.pop(),M=ee.length>0?ee[ee.length-1]:null,B!==null&&B.renderEnd()};function yt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)N.pushLight(e),e.castShadow&&N.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?we:Se;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&ke.setFromMatrixPosition(e.matrixWorld).applyMatrix4(De);let i=We.update(e),a=e.material;a.visible&&M.push(e,i,a,n,ke.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?we:Se;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=We.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),ke.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ke.copy(e.boundingSphere.center)),ke.applyMatrix4(e.matrixWorld).applyMatrix4(De)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&M.push(e,i,c,n,ke.z,s,t)}}else a.visible&&M.push(e,i,a,n,ke.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)yt(i[e],t,n,r)}function bt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;N.setupLightsView(n),Te===!0&&Ye.setGlobalState(L.clippingPlanes,n),r&&q.viewport(de.copy(r)),i.length>0&&St(i,t,n),a.length>0&&St(a,t,n),o.length>0&&St(o,t,n),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function xt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[r.id]===void 0){let e=Ie.has(`EXT_color_buffer_half_float`)||Ie.has(`EXT_color_buffer_float`);N.state.transmissionRenderTarget[r.id]=new Fe(1,1,{generateMipmaps:!0,type:e?u:o,minFilter:a,samples:Math.max(4,Le.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ce.workingColorSpace})}let s=N.state.transmissionRenderTarget[r.id],c=r.viewport||de;s.setSize(c.z*L.transmissionResolutionScale,c.w*L.transmissionResolutionScale);let l=L.getRenderTarget(),d=L.getActiveCubeFace(),f=L.getActiveMipmapLevel();L.setRenderTarget(s),L.getClearColor(me),he=L.getClearAlpha(),he<1&&L.setClearColor(16777215,.5),L.clear(),je&&Ze.render(n);let p=L.toneMapping;L.toneMapping=0;let m=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),N.setupLightsView(r),Te===!0&&Ye.setGlobalState(L.clippingPlanes,r),St(e,n,r),Be.updateMultisampleRenderTarget(s),Be.updateRenderTargetMipmap(s),Ie.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ct(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Be.updateMultisampleRenderTarget(s),Be.updateRenderTargetMipmap(s))}L.setRenderTarget(l,d,f),L.setClearColor(me,he),m!==void 0&&(r.viewport=m),L.toneMapping=p}function St(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ct(o,t,n,s,l,c)}}function Ct(e,t,n,r,i,a){B!==null&&i.isNodeMaterial&&B.setObject(e,i),e.onBeforeRender(L,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(L,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,L.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,L.renderBufferDirect(n,t,r,i,e,a),i.side=2):L.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(L,t,n,r,i,a)}function wt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Tt(e,t,n){t.isScene!==!0&&(t=Ae);let r=J.get(e),i=N.state.lights,a=N.state.shadowsArray,o=i.state.version,s=Ge.getParameters(e,i.state,a,t,n,N.state.lightProbeGridArray),c=Ge.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ve.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,lt),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Ot(e,s),d}else s.uniforms=Ge.getUniforms(e),B!==null&&e.isNodeMaterial&&B.build(e,n,s),e.onBeforeCompile(s,L),d=Ge.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ye.uniform),Ot(e,s),r.needsLights=jt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=wt(N.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Et(e,t,n,r,i){let a=J.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Tt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function Dt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=vo.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ot(e,t){let n=J.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function kt(e,t,n,r,i){t.isScene!==!0&&(t=Ae),Be.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=V===null?L.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Ce.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ve.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(h=L.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=J.get(r),y=N.state.lights;if(Te===!0&&(Ee===!0||e!==ue)){let t=e===ue&&r.id===H;Ye.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ye.numPlanes||v.numIntersection!==Ye.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===wt(N.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?Et(r,t,i,s,h):Tt(r,t,i),B&&r.isNodeMaterial&&B.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),D=v.uniforms;if(q.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==H&&(H=r.id,w=!0),C||ue!==e){q.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(K,`projectionMatrix`,e.projectionMatrix),E.setValue(K,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(K,Oe.setFromMatrixPosition(e.matrixWorld)),Le.logarithmicDepthBuffer&&E.setValue(K,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(K,`isOrthographic`,e.isOrthographicCamera===!0),ue!==e&&(ue=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(K,`sunShadowMap`,y.state.sunShadowMap,Be),y.state.directionalShadowMap.length>0&&E.setValue(K,`directionalShadowMap`,y.state.directionalShadowMap,Be),y.state.spotShadowMap.length>0&&E.setValue(K,`spotShadowMap`,y.state.spotShadowMap,Be),y.state.pointShadowMap.length>0&&E.setValue(K,`pointShadowMap`,y.state.pointShadowMap,Be)),i.isSkinnedMesh){E.setOptional(K,i,`bindMatrix`),E.setOptional(K,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(K,`boneTexture`,e.boneTexture,Be))}i.isBatchedMesh&&(E.setOptional(K,i,`batchingTexture`),E.setValue(K,`batchingTexture`,i._matricesTexture,Be),E.setOptional(K,i,`batchingIdTexture`),E.setValue(K,`batchingIdTexture`,i._indirectTexture,Be),E.setOptional(K,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(K,`batchingColorTexture`,i._colorsTexture,Be));let O=n.morphAttributes;if((O.position!==void 0||O.normal!==void 0||O.color!==void 0)&&Qe.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(K,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=Fs()),w){if(E.setValue(K,`toneMappingExposure`,L.toneMappingExposure),v.needsLights&&At(D,T),a&&r.fog===!0&&Ke.refreshFogUniforms(D,a),Ke.refreshMaterialUniforms(D,r,_e,ge,N.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=j,t=0;for(let n of N.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;D.probesSH.value=e.textures,D.probesMin.value=e.min,D.probesMax.value=e.max,D.probesResolution.value=e.resolution}vo.upload(K,Dt(v),D,Be)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(vo.upload(K,Dt(v),D,Be),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(K,`center`,i.center),E.setValue(K,`modelViewMatrix`,i.modelViewMatrix),E.setValue(K,`normalMatrix`,i.normalMatrix),E.setValue(K,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];rt.update(n,S),rt.bind(n,S)}}return S}function At(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function jt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(e,t,n){let r=J.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),J.get(e.texture).__webglTexture=t,J.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=J.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){V=e,ce=t,le=n;let r=null,i=!1,a=!1;if(e){let o=J.get(e);if(o.__useDefaultFramebuffer!==void 0){q.bindFramebuffer(K.FRAMEBUFFER,o.__webglFramebuffer),de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest,q.viewport(de),q.scissor(fe),q.setScissorTest(pe),H=-1;return}if(o.__webglFramebuffer===void 0)Be.setupRenderTarget(e);else if(o.__hasExternalTextures)Be.rebindTextures(e,J.get(e.texture).__webglTexture,J.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&J.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Be.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=J.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Be.useMultisampledRTT(e)===!1?J.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest}else de.copy(ye).multiplyScalar(_e).floor(),fe.copy(be).multiplyScalar(_e).floor(),pe=xe;if(n!==0&&(r=ae),q.bindFramebuffer(K.FRAMEBUFFER,r)&&q.drawBuffers(e,r),q.viewport(de),q.scissor(fe),q.setScissorTest(pe),i){let r=J.get(e.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=J.get(e.textures[t]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=J.get(e.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,t.__webglTexture,n)}H=-1};function Mt(e){let t=J.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Le.textureFormatReadable(e.format),t.__typeReadable=Le.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=J.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){q.bindFramebuffer(K.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+s);let u=Mt(o);if(u.__formatReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&K.readPixels(t,n,r,i,tt.convert(c),tt.convert(l),a)}finally{let e=V===null?null:J.get(V).__webglFramebuffer;q.bindFramebuffer(K.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=J.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){q.bindFramebuffer(K.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+s);let d=Mt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,f),K.bufferData(K.PIXEL_PACK_BUFFER,a.byteLength,K.STREAM_READ),K.readPixels(t,n,r,i,tt.convert(l),tt.convert(u),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);let p=V===null?null:J.get(V).__webglFramebuffer;q.bindFramebuffer(K.FRAMEBUFFER,p);let m=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await ie(K,m,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,f),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,a),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(f),K.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Be.setTexture2D(e,0),K.copyTexSubImage2D(K.TEXTURE_2D,n,0,0,o,s,i,a),q.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=tt.convert(t.format),_=tt.convert(t.type),v;t.isData3DTexture?(Be.setTexture3D(t,0),v=K.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Be.setTexture2DArray(t,0),v=K.TEXTURE_2D_ARRAY):(Be.setTexture2D(t,0),v=K.TEXTURE_2D),q.activeTexture(K.TEXTURE0),q.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,t.flipY),q.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),q.pixelStorei(K.UNPACK_ALIGNMENT,t.unpackAlignment);let y=q.getParameter(K.UNPACK_ROW_LENGTH),b=q.getParameter(K.UNPACK_IMAGE_HEIGHT),x=q.getParameter(K.UNPACK_SKIP_PIXELS),S=q.getParameter(K.UNPACK_SKIP_ROWS),C=q.getParameter(K.UNPACK_SKIP_IMAGES);q.pixelStorei(K.UNPACK_ROW_LENGTH,h.width),q.pixelStorei(K.UNPACK_IMAGE_HEIGHT,h.height),q.pixelStorei(K.UNPACK_SKIP_PIXELS,l),q.pixelStorei(K.UNPACK_SKIP_ROWS,u),q.pixelStorei(K.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=J.get(e),r=J.get(t),h=J.get(n.__renderTarget),g=J.get(r.__renderTarget);q.bindFramebuffer(K.READ_FRAMEBUFFER,h.__webglFramebuffer),q.bindFramebuffer(K.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,J.get(e).__webglTexture,i,d+n),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,J.get(t).__webglTexture,a,m+n)),K.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,K.DEPTH_BUFFER_BIT,K.NEAREST);q.bindFramebuffer(K.READ_FRAMEBUFFER,null),q.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||J.has(e)){let n=J.get(e),r=J.get(t);q.bindFramebuffer(K.READ_FRAMEBUFFER,oe),q.bindFramebuffer(K.DRAW_FRAMEBUFFER,se);for(let e=0;e<c;e++)w?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,n.__webglTexture,i),T?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,r.__webglTexture,a),i===0?T?K.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):K.copyTexSubImage2D(v,a,f,p,l,u,o,s):K.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,K.COLOR_BUFFER_BIT,K.NEAREST);q.bindFramebuffer(K.READ_FRAMEBUFFER,null),q.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?K.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?K.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):K.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):K.texSubImage2D(K.TEXTURE_2D,a,f,p,o,s,g,_,h);q.pixelStorei(K.UNPACK_ROW_LENGTH,y),q.pixelStorei(K.UNPACK_IMAGE_HEIGHT,b),q.pixelStorei(K.UNPACK_SKIP_PIXELS,x),q.pixelStorei(K.UNPACK_SKIP_ROWS,S),q.pixelStorei(K.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&K.generateMipmap(v),q.unbindTexture()},this.initRenderTarget=function(e){J.get(e).__webglFramebuffer===void 0&&Be.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Be.setTextureCube(e,0):e.isData3DTexture?Be.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Be.setTexture2DArray(e,0):Be.setTexture2D(e,0),q.unbindTexture()},this.resetState=function(){ce=0,le=0,V=null,q.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return P}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ce._getUnpackColorSpace()}},Ls={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},Rs=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},zs=new ii(-1,1,1,-1,0,1),Bs=new class extends vn{constructor(){super(),this.setAttribute(`position`,new Y([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new Y([0,2,0,0,2,0],2))}},Vs=class{constructor(e){this._mesh=new Hn(Bs,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,zs)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Hs=class extends Rs{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Er?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Cr.clone(e.uniforms),this.material=new Er({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Vs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Us=class extends Rs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Ws=class extends Rs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Gs=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new U);this._width=n.width,this._height=n.height,t=new Fe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:u}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hs(Ls),this.copyPass.material.blending=0,this.timer=new ui}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Us!==void 0&&(r instanceof Us?n=!0:r instanceof Ws&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new U);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Ks={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new _t(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},qs=class e extends Rs{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new U(256,256):new U(e.x,e.y),this.clearColor=new _t(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Fe(i,a,{type:u,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Fe(i,a,{type:u,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Fe(i,a,{type:u,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Ks;this.highPassUniforms=Cr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Er({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new U(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Cr.clone(Ls.uniforms),this.blendMaterial=new Er({uniforms:this.copyUniforms,vertexShader:Ls.vertexShader,fragmentShader:Ls.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new _t,this._oldClearAlpha=1,this._basic=new An,this._fsQuad=new Vs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new U(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new Er({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new U(.5,.5)},direction:{value:new U(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Er({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};qs.BlurDirectionX=new U(1,0),qs.BlurDirectionY=new U(0,1);var Js=class e{constructor(t,n,r,i,a=`div`){this.parent=t,this.object=n,this.property=r,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(`div`),this.domElement.classList.add(`controller`),this.domElement.classList.add(i),this.$name=document.createElement(`div`),this.$name.classList.add(`name`),e.nextNameID=e.nextNameID||0,this.$name.id=`lil-gui-name-`+ ++e.nextNameID,this.$widget=document.createElement(a),this.$widget.classList.add(`widget`),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(r)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle(`disabled`,e),this.$disable.toggleAttribute(`disabled`,e)),this}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?`none`:``,this}hide(){return this.show(!1)}options(e){let t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},Ys=class extends Js{constructor(e,t,n){super(e,t,n,`boolean`,`label`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`checkbox`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener(`change`,()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function Xs(e){let t,n;return(t=e.match(/(#|0x)?([a-f0-9]{6})/i))?n=t[2]:(t=e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),!!n&&`#`+n}var Zs={isPrimitive:!0,match:e=>typeof e==`string`,fromHexString:Xs,toHexString:Xs},Qs={isPrimitive:!0,match:e=>typeof e==`number`,fromHexString:e=>parseInt(e.substring(1),16),toHexString:e=>`#`+e.toString(16).padStart(6,0)},$s=[Zs,Qs,{isPrimitive:!1,match:Array.isArray,fromHexString(e,t,n=1){let r=Qs.fromHexString(e);t[0]=(r>>16&255)/255*n,t[1]=(r>>8&255)/255*n,t[2]=(255&r)/255*n},toHexString:([e,t,n],r=1)=>Qs.toHexString(e*(r=255/r)<<16^t*r<<8^(n*r|0))},{isPrimitive:!1,match:e=>Object(e)===e,fromHexString(e,t,n=1){let r=Qs.fromHexString(e);t.r=(r>>16&255)/255*n,t.g=(r>>8&255)/255*n,t.b=(255&r)/255*n},toHexString:({r:e,g:t,b:n},r=1)=>Qs.toHexString(e*(r=255/r)<<16^t*r<<8^(n*r|0))}],ec=class extends Js{constructor(e,t,n,r){var i;super(e,t,n,`color`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`color`),this.$input.setAttribute(`tabindex`,-1),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$text=document.createElement(`input`),this.$text.setAttribute(`type`,`text`),this.$text.setAttribute(`spellcheck`,`false`),this.$text.setAttribute(`aria-labelledby`,this.$name.id),this.$display=document.createElement(`div`),this.$display.classList.add(`display`),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(i=this.initialValue,$s.find(e=>e.match(i))),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener(`input`,()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener(`blur`,()=>{this._callOnFinishChange()}),this.$text.addEventListener(`input`,()=>{let e=Xs(this.$text.value);e&&this._setValueFromHexString(e)}),this.$text.addEventListener(`focus`,()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener(`blur`,()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},tc=class extends Js{constructor(e,t,n){super(e,t,n,`function`),this.$button=document.createElement(`button`),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener(`click`,e=>{e.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener(`touchstart`,()=>{},{passive:!0}),this.$disable=this.$button}},nc=class extends Js{constructor(e,t,n,r,i,a){super(e,t,n,`number`),this._initInput(),this.min(r),this.max(i);let o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=100*t+`%`}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`number`),this.$input.setAttribute(`step`,`any`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;let e=e=>{let t=parseFloat(this.$input.value);isNaN(t)||(this._snapClampSetValue(t+e),this.$input.value=this.getValue())},t,n,r,i,a,o=!1,s=e=>{if(o){let r=e.clientX-t,i=e.clientY-n;Math.abs(i)>5?(e.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,`vertical`)):Math.abs(r)>5&&c()}if(!o){let t=e.clientY-r;a-=t*this._step*this._arrowKeyMultiplier(e),i+a>this._max?a=this._max-i:i+a<this._min&&(a=this._min-i),this._snapClampSetValue(i+a)}r=e.clientY},c=()=>{this._setDraggingStyle(!1,`vertical`),this._callOnFinishChange(),window.removeEventListener(`mousemove`,s),window.removeEventListener(`mouseup`,c)};this.$input.addEventListener(`input`,()=>{let e=parseFloat(this.$input.value);isNaN(e)||(this._stepExplicit&&(e=this._snap(e)),this.setValue(this._clamp(e)))}),this.$input.addEventListener(`keydown`,t=>{t.code===`Enter`&&this.$input.blur(),t.code===`ArrowUp`&&(t.preventDefault(),e(this._step*this._arrowKeyMultiplier(t))),t.code===`ArrowDown`&&(t.preventDefault(),e(this._step*this._arrowKeyMultiplier(t)*-1))}),this.$input.addEventListener(`wheel`,t=>{this._inputFocused&&(t.preventDefault(),e(this._step*this._normalizeMouseWheel(t)))},{passive:!1}),this.$input.addEventListener(`mousedown`,e=>{t=e.clientX,n=r=e.clientY,o=!0,i=this.getValue(),a=0,window.addEventListener(`mousemove`,s),window.addEventListener(`mouseup`,c)}),this.$input.addEventListener(`focus`,()=>{this._inputFocused=!0}),this.$input.addEventListener(`blur`,()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement(`div`),this.$slider.classList.add(`slider`),this.$fill=document.createElement(`div`),this.$fill.classList.add(`fill`),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add(`hasSlider`);let e=e=>{let t=this.$slider.getBoundingClientRect(),n=(r=e,i=t.left,a=t.right,o=this._min,s=this._max,(r-i)/(a-i)*(s-o)+o);var r,i,a,o,s;this._snapClampSetValue(n)},t=t=>{e(t.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener(`mousemove`,t),window.removeEventListener(`mouseup`,n)},r,i,a=!1,o=t=>{t.preventDefault(),this._setDraggingStyle(!0),e(t.touches[0].clientX),a=!1},s=t=>{if(a){let e=t.touches[0].clientX-r,n=t.touches[0].clientY-i;Math.abs(e)>Math.abs(n)?o(t):(window.removeEventListener(`touchmove`,s),window.removeEventListener(`touchend`,c))}else t.preventDefault(),e(t.touches[0].clientX)},c=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener(`touchmove`,s),window.removeEventListener(`touchend`,c)},l=this._callOnFinishChange.bind(this),u;this.$slider.addEventListener(`mousedown`,r=>{this._setDraggingStyle(!0),e(r.clientX),window.addEventListener(`mousemove`,t),window.addEventListener(`mouseup`,n)}),this.$slider.addEventListener(`touchstart`,e=>{e.touches.length>1||(this._hasScrollBar?(r=e.touches[0].clientX,i=e.touches[0].clientY,a=!0):o(e),window.addEventListener(`touchmove`,s,{passive:!1}),window.addEventListener(`touchend`,c))},{passive:!1}),this.$slider.addEventListener(`wheel`,e=>{if(Math.abs(e.deltaX)<Math.abs(e.deltaY)&&this._hasScrollBar)return;e.preventDefault();let t=this._normalizeMouseWheel(e)*this._step;this._snapClampSetValue(this.getValue()+t),this.$input.value=this.getValue(),clearTimeout(u),u=setTimeout(l,400)},{passive:!1})}_setDraggingStyle(e,t=`horizontal`){this.$slider&&this.$slider.classList.toggle(`active`,e),document.body.classList.toggle(`lil-gui-dragging`,e),document.body.classList.toggle(`lil-gui-`+t,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},rc=class extends Js{constructor(e,t,n,r){super(e,t,n,`option`),this.$select=document.createElement(`select`),this.$select.setAttribute(`aria-labelledby`,this.$name.id),this.$display=document.createElement(`div`),this.$display.classList.add(`display`),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(e=>{let t=document.createElement(`option`);t.innerHTML=e,this.$select.appendChild(t)}),this.$select.addEventListener(`change`,()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener(`focus`,()=>{this.$display.classList.add(`focus`)}),this.$select.addEventListener(`blur`,()=>{this.$display.classList.remove(`focus`)}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){let e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}},ic=class extends Js{constructor(e,t,n){super(e,t,n,`string`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`text`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$input.addEventListener(`input`,()=>{this.setValue(this.$input.value)}),this.$input.addEventListener(`keydown`,e=>{e.code===`Enter`&&this.$input.blur()}),this.$input.addEventListener(`blur`,()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},ac=!1,oc=class e{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:i=`Controls`,injectStyles:a=!0,touchStyles:o=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement(`div`),this.domElement.classList.add(`lil-gui`),this.$title=document.createElement(`div`),this.$title.classList.add(`title`),this.$title.setAttribute(`role`,`button`),this.$title.setAttribute(`aria-expanded`,!0),this.$title.setAttribute(`tabindex`,0),this.$title.addEventListener(`click`,()=>this.openAnimated(this._closed)),this.$title.addEventListener(`keydown`,e=>{e.code!==`Enter`&&e.code!==`Space`||(e.preventDefault(),this.$title.click())}),this.$title.addEventListener(`touchstart`,()=>{},{passive:!0}),this.$children=document.createElement(`div`),this.$children.classList.add(`children`),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(i),o&&this.domElement.classList.add(`allow-touch-styles`),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add(`root`),!ac&&a&&(function(e){let t=document.createElement(`style`);t.innerHTML=e;let n=document.querySelector(`head link[rel=stylesheet], head style`);n?document.head.insertBefore(t,n):document.head.appendChild(t)}(`.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}`),ac=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add(`autoPlace`),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty(`--width`,r+`px`),this.domElement.addEventListener(`keydown`,e=>e.stopPropagation()),this.domElement.addEventListener(`keyup`,e=>e.stopPropagation())}add(e,t,n,r,i){if(Object(n)===n)return new rc(this,e,t,n);let a=e[t];switch(typeof a){case`number`:return new nc(this,e,t,n,r,i);case`boolean`:return new Ys(this,e,t);case`string`:return new ic(this,e,t);case`function`:return new tc(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new ec(this,e,t,n)}addFolder(t){return new e({parent:this,title:t})}load(e,t=!0){return e.controllers&&this.controllers.forEach(t=>{t instanceof tc||t._name in e.controllers&&t.load(e.controllers[t._name])}),t&&e.folders&&this.folders.forEach(t=>{t._title in e.folders&&t.load(e.folders[t._title])}),this}save(e=!0){let t={controllers:{},folders:{}};return this.controllers.forEach(e=>{if(!(e instanceof tc)){if(e._name in t.controllers)throw Error(`Cannot save GUI with duplicate property "${e._name}"`);t.controllers[e._name]=e.save()}}),e&&this.folders.forEach(e=>{if(e._title in t.folders)throw Error(`Cannot save GUI with duplicate folder "${e._title}"`);t.folders[e._title]=e.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute(`aria-expanded`,!this._closed),this.domElement.classList.toggle(`closed`,this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?`none`:``,this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute(`aria-expanded`,!this._closed),requestAnimationFrame(()=>{let t=this.$children.clientHeight;this.$children.style.height=t+`px`,this.domElement.classList.add(`transition`);let n=e=>{e.target===this.$children&&(this.$children.style.height=``,this.domElement.classList.remove(`transition`),this.$children.removeEventListener(`transitionend`,n))};this.$children.addEventListener(`transitionend`,n);let r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle(`closed`,!e),requestAnimationFrame(()=>{this.$children.style.height=r+`px`})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}},sc=8192,cc=1024,lc=1025,uc=24*Math.PI/180,Q={uTime:{value:0},uCamPos:{value:new W},uMoonDir:{value:new W(Math.cos(uc),Math.sin(uc),0)},uMoonColor:{value:new W(.42,.52,.72)},uAmbient:{value:new W(.045,.062,.095)},uFogAmbient:{value:new W(.05,.064,.09)},uFlash:{value:0},uFlashPos:{value:new W(0,900,0)},uFlashColor:{value:new W(.72,.78,1)},uHeightTex:{value:null},uNoiseTex:{value:null},uNoise3D:{value:null},uWorld:{value:sc},uGrid:{value:lc},uWind:{value:new U(8,3)},uRain:{value:.85},uMist:{value:1},uTemplePos:{value:new W(0,-9999,0)},uLampColor:{value:new W(.95,.48,.17)},uBeamPos:{value:Array.from({length:16},()=>new W(0,-9999,0))},uBeamDir:{value:Array.from({length:16},()=>new W(0,-1,0))},uBeamCount:{value:0},uBlastPos:{value:new W(0,-9999,0)},uBlastColor:{value:new W(0,0,0)},uFieldC:{value:new W(0,-9999,0)},uFieldD:{value:new U(1,0)},uFieldLampPos:{value:new W(0,-9999,0)},uFieldLampColor:{value:new W(0,0,0)}};function dc(e){let t=e>>>0;return function(){t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var fc=e=>e*e*e*(e*(e*6-15)+10),pc=(e,t,n)=>e+(t-e)*n;function mc(e,t,n){switch(e&7){case 0:return t+n;case 1:return n-t;case 2:return t-n;case 3:return-t-n;case 4:return 1.4142*t;case 5:return-1.4142*t;case 6:return 1.4142*n;default:return-1.4142*n}}function hc(e,t,n,r){e&=15;let i=e<8?t:n,a=e<4?n:e===12||e===14?t:r;return(e&1?-i:i)+(e&2?-a:a)}var gc=class{constructor(e=1){let t=dc(e),n=new Uint8Array(256);for(let e=0;e<256;e++)n[e]=e;for(let e=255;e>0;e--){let r=t()*(e+1)|0,i=n[e];n[e]=n[r],n[r]=i}this.p=new Uint8Array(512);for(let e=0;e<512;e++)this.p[e]=n[e&255]}noise2(e,t){let n=this.p,r=Math.floor(e),i=Math.floor(t),a=e-r,o=t-i,s=r&255,c=i&255,l=fc(a),u=fc(o),d=n[n[s]+c],f=n[n[s]+c+1],p=n[n[s+1]+c],m=n[n[s+1]+c+1];return pc(pc(mc(d,a,o),mc(p,a-1,o),l),pc(mc(f,a,o-1),mc(m,a-1,o-1),l),u)}pnoise2(e,t,n){let r=this.p,i=Math.floor(e),a=Math.floor(t),o=e-i,s=t-a,c=(i%n+n)%n,l=(c+1)%n,u=(a%n+n)%n,d=(u+1)%n,f=fc(o),p=fc(s),m=r[r[c]+u],h=r[r[c]+d],g=r[r[l]+u],_=r[r[l]+d];return pc(pc(mc(m,o,s),mc(g,o-1,s),f),pc(mc(h,o,s-1),mc(_,o-1,s-1),f),p)}pnoise3(e,t,n,r){let i=this.p,a=Math.floor(e),o=Math.floor(t),s=Math.floor(n),c=e-a,l=t-o,u=n-s,d=(a%r+r)%r,f=(d+1)%r,p=(o%r+r)%r,m=(p+1)%r,h=(s%r+r)%r,g=(h+1)%r,_=fc(c),v=fc(l),y=fc(u),b=i[d]+p,x=i[d]+m,S=i[f]+p,C=i[f]+m;return pc(pc(pc(hc(i[i[b]+h],c,l,u),hc(i[i[S]+h],c-1,l,u),_),pc(hc(i[i[x]+h],c,l-1,u),hc(i[i[C]+h],c-1,l-1,u),_),v),pc(pc(hc(i[i[b]+g],c,l,u-1),hc(i[i[S]+g],c-1,l,u-1),_),pc(hc(i[i[x]+g],c,l-1,u-1),hc(i[i[C]+g],c-1,l-1,u-1),_),v),y)}fbm2(e,t,n,r=2,i=.5){let a=.5,o=1,s=0,c=0;for(let l=0;l<n;l++)s+=a*this.noise2(e*o+l*17.1,t*o-l*9.7),c+=a,a*=i,o*=r;return s/c}ridged2(e,t,n){let r=.5,i=1,a=0,o=0,s=1;for(let c=0;c<n;c++){let n=1-Math.abs(this.noise2(e*i+c*13.3,t*i+c*7.9));n*=n,a+=n*r*s,o+=r,s=n,r*=.5,i*=2.05}return a/o}};function _c(e,t=.2){let n=0;for(let t=0;t<e.length;t++)n+=e[t];n/=e.length;let r=0;for(let t=0;t<e.length;t++)r+=(e[t]-n)*(e[t]-n);let i=t/Math.sqrt(r/e.length);for(let t=0;t<e.length;t++)e[t]=Math.min(1,Math.max(0,.5+(e[t]-n)*i))}function vc(t=512){let n=new gc(11),r=new gc(29),s=t*t,c=new Float32Array(s),l=new Float32Array(s),u=new Float32Array(s);for(let e=0;e<t;e++){let i=e/t;for(let a=0;a<t;a++){let o=a/t,s=.5,d=.5,f=8,p=0,m=0,h=0;for(let e=0;e<6;e++){let t=n.pnoise2(o*f,i*f,f);p+=s*t,m+=s*r.pnoise2(o*f,i*f,f),e<4&&(h+=d*t),s*=.5,d*=.42,f*=2}let g=e*t+a;c[g]=p,l[g]=m,u[g]=h}}_c(c),_c(l);let d=new Float32Array(s),f=new Float32Array(s),p=1e-6;for(let e=0;e<t;e++){let n=(e+1)%t,r=(e+t-1)%t;for(let i=0;i<t;i++){let a=(i+1)%t,o=(i+t-1)%t,s=e*t+i;d[s]=u[e*t+a]-u[e*t+o],f[s]=u[n*t+i]-u[r*t+i],p=Math.max(p,Math.abs(d[s]),Math.abs(f[s]))}}let h=new Uint8Array(s*4),g=1/(p*.8);for(let e=0;e<s;e++)h[e*4]=c[e]*255,h[e*4+1]=l[e]*255,h[e*4+2]=Math.min(255,Math.max(0,(d[e]*g*.5+.5)*255)),h[e*4+3]=Math.min(255,Math.max(0,(f[e]*g*.5+.5)*255));let _=new Gn(h,t,t,m,o);return _.wrapS=_.wrapT=e,_.minFilter=a,_.magFilter=i,_.generateMipmaps=!0,_.anisotropy=8,_.needsUpdate=!0,_}function yc(t=64){let n=new gc(101),r=new gc(211),a=t*t*t,s=new Float32Array(a),c=new Float32Array(a),l=0;for(let e=0;e<t;e++){let i=e/t;for(let e=0;e<t;e++){let a=e/t;for(let e=0;e<t;e++,l++){let o=e/t;s[l]=.5*n.pnoise3(o*4,a*4,i*4,4)+.27*n.pnoise3(o*8,a*8,i*8,8)+.15*n.pnoise3(o*16,a*16,i*16,16)+.08*n.pnoise3(o*32,a*32,i*32,32),c[l]=.5*r.pnoise3(o*8,a*8,i*8,8)+.3*r.pnoise3(o*16,a*16,i*16,16)+.2*r.pnoise3(o*32,a*32,i*32,32)}}}_c(s),_c(c);let u=new Uint8Array(a*2);for(l=0;l<a;l++)u[l*2]=s[l]*255,u[l*2+1]=c[l]*255;let d=new Le(u,t,t,t);return d.format=v,d.type=o,d.minFilter=d.magFilter=i,d.wrapS=d.wrapT=d.wrapR=e,d.unpackAlignment=1,d.needsUpdate=!0,d}var bc=`
#define PI 3.14159265359
uniform float uTime;
uniform vec3 uCamPos;
uniform vec3 uMoonDir;
uniform vec3 uMoonColor;
uniform vec3 uAmbient;
uniform vec3 uFogAmbient;
uniform float uFlash;
uniform vec3 uFlashPos;
uniform vec3 uFlashColor;
uniform sampler2D uHeightTex;
uniform sampler2D uNoiseTex;
uniform float uWorld;
uniform float uGrid;
uniform vec2 uWind;
uniform float uRain;
uniform float uMist;
uniform vec3 uTemplePos;
uniform vec3 uLampColor;
uniform vec3 uFieldLampPos;
uniform vec3 uFieldLampColor;

// warm lantern light spilling from the temple courtyard, and the floodlight over the airfield apron
vec3 lampLight(vec3 p, vec3 N) {
  vec3 c = vec3(0.0);
  vec3 d = uTemplePos - p;
  float d2 = dot(d, d);
  if (d2 < 160000.0) c += uLampColor * (max(dot(N, d * inversesqrt(d2)), 0.0) * 0.8 + 0.2) / (1.0 + d2 / 200.0);
  d = uFieldLampPos - p;
  d2 = dot(d, d) + 1.0;
  if (d2 < 90000.0) c += uFieldLampColor * (max(dot(N, d * inversesqrt(d2)), 0.0) * 0.85 + 0.15) / (1.0 + d2 / 900.0);
  return c;
}

uniform vec3 uBeamPos[16];
uniform vec3 uBeamDir[16];
uniform int uBeamCount;
uniform vec3 uBlastPos;
uniform vec3 uBlastColor;

// orange light from an explosion or a burning wreck
vec3 blastLight(vec3 p, vec3 N) {
  if (uBlastColor.r <= 0.0) return vec3(0.0);
  vec3 d = uBlastPos - p;
  float d2 = dot(d, d) + 1.0;
  float ndl = max(dot(N, d * inversesqrt(d2)), 0.0) * 0.85 + 0.15;
  return uBlastColor * ndl * 400.0 / (d2 + 400.0);
}

// light from every searchlight whose beam covers this point
vec3 beamLight(vec3 p, vec3 N) {
  float sum = 0.0;
  for (int i = 0; i < 16; i++) {
    if (i >= uBeamCount) break;
    vec3 d = p - uBeamPos[i];
    float t = dot(d, uBeamDir[i]);
    if (t > 0.0 && t < 1500.0) {
      float r = length(d - uBeamDir[i] * t);
      float rad = 0.8 + t * 0.022;
      float k = smoothstep(rad * 1.15, rad * 0.55, r) * exp(-t * 0.0007);
      sum += k * (max(dot(N, -uBeamDir[i]), 0.0) * 0.8 + 0.2);
    }
  }
  return vec3(0.8, 0.9, 1.0) * sum * 1.7 + blastLight(p, N);
}

vec2 worldUV(vec2 xz) {
  return (xz / uWorld + 0.5) * ((uGrid - 1.0) / uGrid) + 0.5 / uGrid;
}
// r = terrain height, g = height of the moon-shadow volume above that point
vec2 terrainHS(vec2 xz) {
  return texture(uHeightTex, worldUV(xz)).rg;
}
float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
vec2 hash22(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy);
}
`,xc=`
vec3 skyColor(vec3 rd) {
  float y = max(rd.y, 0.0);
  vec2 cuv = rd.xz / (y + 0.14);
  vec2 w = uWind * uTime * 0.0006;
  float n1 = texture(uNoiseTex, cuv * 0.09 + w).r;
  float n2 = texture(uNoiseTex, cuv * 0.23 + w * 1.8 + n1 * 0.2).g;
  float n3 = texture(uNoiseTex, cuv * 0.61 + w * 3.1).r;
  float cl = n1 * 0.5 + n2 * 0.32 + n3 * 0.18;

  float md = max(dot(rd, uMoonDir), 0.0);
  float nearMoon = pow(md, 30.0);
  float dens = smoothstep(0.36 + nearMoon * 0.20, 0.60 + nearMoon * 0.30, cl);

  vec3 col = mix(vec3(0.050, 0.064, 0.092), vec3(0.010, 0.014, 0.022), dens);

  // moonlight scattered through the cloud deck
  float halo = pow(md, 5.0) * 0.10 + pow(md, 28.0) * 0.55 + pow(md, 220.0) * 1.6;
  col += uMoonColor * halo * (1.0 - dens * 0.82);
  float edge = smoothstep(0.0, 0.5, dens) * (1.0 - smoothstep(0.5, 1.0, dens));
  col += uMoonColor * edge * pow(md, 10.0) * 0.5;

  // moon disc
  float mdot = dot(rd, uMoonDir);
  float disc = smoothstep(0.99955, 0.99966, mdot);
  if (disc > 0.0) {
    vec3 mu = normalize(cross(uMoonDir, vec3(0.0, 1.0, 0.0)));
    vec3 mv = cross(mu, uMoonDir);
    vec2 mp = vec2(dot(rd, mu), dot(rd, mv)) * 34.0;
    float maria = textureLod(uNoiseTex, mp * 0.11 + 0.31, 0.0).r;
    float limb = sqrt(max(1.0 - dot(mp, mp), 0.0));
    vec3 moon = vec3(1.0, 0.98, 0.93) * (0.5 + 0.5 * smoothstep(0.3, 0.7, maria)) * (0.55 + 0.45 * limb);
    col += moon * 9.0 * (1.0 - dens * 0.92) * disc;
  }

  // lightning inside the clouds
  if (uFlash > 0.001) {
    vec3 fd = normalize(uFlashPos - uCamPos);
    float fa = max(dot(rd, fd), 0.0);
    float lum = pow(fa, 14.0) * 0.22 + pow(fa, 3.0) * 0.10 + 0.03;
    col += uFlashColor * uFlash * lum * (0.15 + 1.1 * cl) * (1.0 - dens * 0.4);
  }

  // far ridgelines and horizon haze
  float az = atan(rd.z, rd.x) / (2.0 * PI);
  float ridge = 0.02
    + 0.07 * textureLod(uNoiseTex, vec2(az * 3.0, 0.37), 0.0).r
    + 0.03 * textureLod(uNoiseTex, vec2(az * 11.0, 0.71), 0.0).g;
  float mt = smoothstep(ridge + 0.003, ridge - 0.003, rd.y);
  vec3 haze = uFogAmbient * 1.15 + uFlashColor * uFlash * 0.05;
  col = mix(col, haze * 0.55, mt * 0.8);
  col = mix(col, haze, exp(-y * 9.0) * 0.85);
  return col;
}
`,Sc=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,Cc=2350,wc=[[2,340,.6],[3,230,2.1],[5,170,4],[7,120,1.3],[11,50,5.2]];function Tc(e){let t=Cc;for(let[n,r,i]of wc)t+=r*Math.sin(n*e+i);return t}function Ec(e){let t=0;for(let[n,r,i]of wc)t+=r*n*Math.cos(n*e+i);return t}var Dc=-Math.PI/2-.42;function Oc(e){let t=Math.atan2(Math.sin(e-Dc),Math.cos(e-Dc));return Math.exp(-((t/.09)**2))}function kc(e,t){let n=Math.hypot(e,t),r=Math.atan2(t,e),i=Ec(r)/Math.max(n,400);return Math.abs(n-Tc(r))/Math.sqrt(1+i*i)}var Ac=(e,t,n)=>e+(t-e)*n,jc=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)};function Mc(e,t,n,r=null){let i=Math.hypot(t,n),a=Math.atan2(n,t),o=Tc(a),s=Ec(a)/Math.max(i,400),c=Math.abs(i-o)/Math.sqrt(1+s*s),l=e.noise2(t*.0011+31.7,n*.0011-12.3),u=e.noise2(t*.0017-55.1,n*.0017+8.9),d=e.noise2(t*7e-4+71.3,n*7e-4+44.4),f=jc(.3,.6,e.noise2(t*.021+5.5,n*.021-3.1)),p=82+30*l+100*Oc(a),m=c-p;if(m<=0){let e=c/p,t=1-e*e;return-13*t*t+6*f*jc(.5,.9,e)*(1-jc(.9,1,e)*.5)}let h=jc(0,140,m),g=t+h*(230*e.noise2(t*75e-5+11.1,n*75e-5-3.7)+42*e.noise2(t*.0041-9.2,n*.0041+5.5)),_=n+h*(230*e.noise2(t*75e-5-27.4,n*75e-5+19.2)+42*e.noise2(t*.0041+33.8,n*.0041-21.6)),v=50*e.noise2(t*.0058+40.1,n*.0058-17.3)+20*e.noise2(t*.014-3.3,n*.014+8.1),y=Math.max(m*.35,m+v*jc(4,50,m)),b=Math.max(4,10+85*Math.min(1,Math.max(0,u*.9+.4))**2),x=y*.09,S=Math.max(80,200+100*d+55*l),C=1+2.2*jc(-.1,.5,e.noise2(t*.0023+61.5,n*.0023-47.9)),w=(13+S*.055)*C,T=25+95*(.5+.5*e.noise2(t*.004-8.8,n*.004+6.1)),E=.5+.24*u;x+=S*(E*jc(b,b+w,y)+(1-E)*jc(b+w+T,b+2*w+T,y)),x+=.16*Math.min(Math.max(y-b-w,0),T);let D=b+2*w+T,O=jc(b+w*.5,D+620,y),k=e.ridged2(g*78e-5+3.3,_*78e-5-7.7,5)**1.15,A=e.ridged2(g*.0021-14.2,_*.0021+6.6,3),j=e.fbm2(g*.0028+1.7,_*.0028+2.9,4);x+=O*(45+470*k+95*(A-.35)*(.35+k)+60*j)+jc(b,D+150,y)*22*j;let M=1-Math.abs(e.noise2(g*.0043+60.2,_*.0043-33.1)),N=M*M;x-=O*N*N*N*(16+42*k)*jc(40,200,x);let P=1-jc(0,.1,Math.abs(e.noise2(g*62e-5+100.5,_*62e-5+200.5))),ee=5+y*.11;P>0&&x>ee&&(x=Ac(x,ee,P*.9));let F=60*e.noise2(g*.0015+9.1,_*.0015-4.2)+22*e.noise2(g*.0052-2.2,_*.0052+7.4),I=.22+.6*jc(-.25,.3,e.noise2(g*.0013+50.5,_*.0013-80.1)),te=x+F;if(te>25){let e=te/88,t=Math.floor(e),n=(t+jc(.32,.68,e-t))*88-F;x=Ac(x,n,I*jc(25,90,te)*O)}let L=18*e.noise2(g*.006+77.7,_*.006+13.1),ne=x+L;if(ne>30){let e=ne/36,t=Math.floor(e),n=(t+jc(.2,.8,e-t))*36-L;x=Ac(x,n,.42*(1.1-I)*jc(30,80,ne)*O)}return x+=jc(260,520,x)*30*(e.ridged2(g*.0065+2.2,_*.0065-9.9,2)-.4),x+=5*e.fbm2(g*.011,_*.011,3)*jc(4,40,y),x+=.7*(e.noise2(t*.05,n*.05)+.6)*jc(0,8,m),x+=3*f*(1-jc(0,20,m)),x>540&&(x=540+(x-540)*.5),r&&(x=Pc(x,t,n,m,r)),Math.max(x,.15+.02*m)}var Nc=(e,t,[n,r,i,a])=>Math.hypot(Math.max(n-e,e-r,0),Math.max(i-t,t-a,0));function Pc(e,t,n,r,i){let a=Fc,o=t-i.x,s=n-i.z,c=o*i.dx+s*i.dz,l=o*i.rx+s*i.rz,u=Math.min(Nc(c,l,[-a.U,a.U,a.V0,a.V1]),Nc(c,l,a.FORE),Nc(c,l,a.BAYS)),d=Nc(c,l,a.UPPER);if(u>=a.FALL&&d>=40)return e;let f=Ac(i.y,a.SHORE,jc(a.V1-a.WALL,a.V1,l)),p=Ac(a.Y2,i.y,jc(a.UPPER[3]-a.WALL,a.UPPER[3],l)),m=jc(0,14,r);if(u===0)return Ac(e,f,m);if(d===0)return p;let h=1-jc(0,40,d),g=1-jc(a.V1+15,a.V1+60,l),_=(1-jc(0,a.FALL,u))*g*(1-h);return Ac(Ac(e,p,h),f,_*m)}var Fc={L:1e3,W:40,U:560,V0:-170,V1:36,FALL:240,Y:18,WALL:10,SHORE:2,FORE:[-400,-270,-215,-170],BAYS:[-150,50,-185,-170],UPPER:[-400,-270,-295,-215],Y2:63,TEMPLE:[-335,-262]};function Ic(e){let{L:t,U:n,V0:r,V1:i,Y:a}=Fc,o=(t,n)=>82+30*e.noise2(t*.0011+31.7,n*.0011-12.3)+100*Oc(Math.atan2(n,t)),s=e=>{let t=Tc(e);return[Math.cos(e)*t,Math.sin(e)*t]},c=(n+60)/Cc,l=(l,u,d)=>{let[f,p]=s(l-u*c),[m,h]=s(l+u*c),g=Math.hypot(m-f,h-p),_=(m-f)/g,v=(h-p)/g,y=Math.cos(d),b=Math.sin(d),x=_*y-v*b,S=_*b+v*y,C=-S,w=x,T=(e,t)=>{for(let a=-n;a<=n;a+=40)for(let n of[i,r]){let r=e+x*a+C*n,i=t+S*a+w*n;if(kc(r,i)-o(r,i)<16)return!1}return!0},E=(f+m)/2,D=(p+h)/2,O=40;for(;O<=440&&!T(E-C*O,D-w*O);)O+=10;if(O>440)return null;let k=E-C*O,A=D-w*O;if(Math.hypot(k,A)>3500)return null;let j={x:k,z:A,y:a,dx:x,dz:S,rx:C,rz:w},M=0;for(let n=0;n<=2e3;n+=50){let r=a+30+.1*n,i=t/2+n;if(Mc(e,k+x*i,A+S*i,j)>r||Mc(e,k+x*i-C*.06*n,A+S*i-w*.06*n,j)>r||Mc(e,k+x*i+C*.06*n,A+S*i+w*.06*n,j)>r)break;M=n+50}return{x:k,z:A,dx:x,dz:S,rx:C,rz:w,run:M,th:l,dir:u,tilt:d}},u=t=>{let a=0;for(let o=-n;o<=n;o+=80)for(let n of[r,(r+i)/2,i])a+=Mc(e,t.x+t.dx*o+t.rx*n,t.z+t.dz*o+t.rz*n);return a/45},d=e=>e.run>=1800?1e4-u(e):e.run,f=null,p=-1,m=e=>{if(!e)return;let t=d(e);t>p&&(f=e,p=t)};for(let e=-Math.PI/2+1.35;e<-Math.PI/2+4.8;e+=.03)for(let t of[1,-1])for(let n=-.4;n<=.401;n+=.08)m(l(e,t,n));if(!f)return null;let h=f;for(let e=h.th-.03;e<=h.th+.03;e+=.01)for(let t=h.tilt-.08;t<=h.tilt+.08;t+=.02)m(l(e,h.dir,t));return{x:f.x,z:f.z,y:a,dx:f.dx,dz:f.dz,rx:f.rx,rz:f.rz,run:f.run,th:f.th}}var Lc=()=>new Promise(e=>{let t=new MessageChannel;t.port1.onmessage=()=>e(),t.port2.postMessage(0)}),Rc=`
attribute float aAO;
varying vec3 vWorldPos;
varying vec3 vNormal;
varying float vAO;
void main() {
  vWorldPos = position;
  vNormal = normal;
  vAO = aAO;
  gl_Position = projectionMatrix * viewMatrix * vec4(position, 1.0);
}
`,zc=()=>`
varying vec3 vWorldPos;
varying vec3 vNormal;
varying float vAO;
${bc}
uniform vec3 uFieldC;
uniform vec2 uFieldD;

// The airfield frame: x down the runway in the take-off direction, y across it to the right.
vec2 fieldUV(vec3 p) {
  vec2 o = p.xz - uFieldC.xz;
  return vec2(dot(o, uFieldD), dot(o, vec2(-uFieldD.y, uFieldD.x)));
}
vec3 fieldPoint(float u, float v, float h) {
  return vec3(uFieldC.x + uFieldD.x * u - uFieldD.y * v, uFieldC.y + h, uFieldC.z + uFieldD.y * u + uFieldD.x * v);
}
const float HALF_L = ${(Fc.L/2).toFixed(1)};
const float HALF_W = ${(Fc.W/2).toFixed(1)};
const vec3 POT = vec3(1.0, 0.78, 0.5);

// A taxiway joining the runway edge (v = -HALF_W) to an apron edge (v = top) at u = c, 22 m wide
// with its corners rounded off.
bool inTaxi(float u, float v, float c, float top) {
  if (v > -HALF_W || v < top) return false;
  float du = abs(u - c);
  if (du < 11.0) return true;
  if (du > 26.0) return false;
  float e = min(-HALF_W - v, v - top);
  if (e > 15.0) return false;
  return length(vec2(du - 26.0, e - 15.0)) > 15.0;
}

// The flare pots every 50 m down both edges: a pool of light round each one, and on wet ground
// their reflections. Only the three nearest along the runway on each side are counted.
vec3 fieldLamps(vec3 wp, vec3 N, vec3 V, float wet, vec2 fl, out vec3 spec) {
  vec3 c = vec3(0.0);
  spec = vec3(0.0);
  float k0 = floor((fl.x + HALF_L) / 50.0 + 0.5);
  for (int i = -1; i <= 1; i++) {
    float k = k0 + float(i);
    if (k < 0.0 || k > HALF_L / 25.0) continue;
    float lu = k * 50.0 - HALF_L;
    for (int s = -1; s <= 1; s += 2) {
      vec3 d = fieldPoint(lu, float(s) * (HALF_W + 2.0), 0.5) - wp;
      float d2 = dot(d, d);
      vec3 Lp = d * inversesqrt(d2);
      c += POT * (max(dot(N, Lp), 0.0) * 0.8 + 0.2) * 2.2 / (1.0 + d2 / 3.5);
      spec += POT * pow(max(dot(N, normalize(Lp + V)), 0.0), 140.0) * wet * 5.0 / (1.0 + d2 / 40000.0);
    }
  }
  return c;
}

vec3 bump(vec3 N, vec3 g, float k) {
  return normalize(N - (g - dot(g, N) * N) * k);
}

void main() {
  vec3 wp = vWorldPos;
  vec3 N = normalize(vNormal);
  float dist = length(wp - uCamPos);

  // noise laid flat on the ground: forest canopy, gravel
  vec4 nA = texture(uNoiseTex, wp.xz * 0.0037);
  vec4 nB = texture(uNoiseTex, wp.xz * 0.027 + 0.17);
  vec4 nC = texture(uNoiseTex, wp.xz * 0.13 + 0.53);

  // noise projected onto the cliff from whichever side it faces
  float wx = N.x * N.x, wz = N.z * N.z;
  float wsum = wx + wz + 1e-4;
  wx /= wsum;
  wz /= wsum;
  vec2 fx = wp.zy, fz = wp.xy;
  // narrow and tall = water streaks; wide and flat = rock strata
  float streak = texture(uNoiseTex, fx * vec2(0.03, 0.004)).r * wx
               + texture(uNoiseTex, fz * vec2(0.03, 0.004)).r * wz;
  float strata = texture(uNoiseTex, fx * vec2(0.005, 0.016) + 0.4).g * wx
               + texture(uNoiseTex, fz * vec2(0.005, 0.016) + 0.4).g * wz;
  vec4 dX = texture(uNoiseTex, fx * 0.018 + 0.7);
  vec4 dZ = texture(uNoiseTex, fz * 0.018 + 0.7);
  float detail = dX.r * wx + dZ.r * wz;
  vec2 gX = dX.ba * 2.0 - 1.0, gZ = dZ.ba * 2.0 - 1.0;
  vec3 gRock = vec3(0.0, gX.y, gX.x) * wx + vec3(gZ.x, gZ.y, 0.0) * wz;

  // near grain: the same projection much finer, for when the plane skims the wall
  vec4 fX = texture(uNoiseTex, fx * 0.11 + 0.21);
  vec4 fZ = texture(uNoiseTex, fz * 0.11 + 0.21);
  float fine = fX.g * wx + fZ.g * wz;
  vec2 hX = fX.ba * 2.0 - 1.0, hZ = fZ.ba * 2.0 - 1.0;
  vec3 gFine = vec3(0.0, hX.y, hX.x) * wx + vec3(hZ.x, hZ.y, 0.0) * wz;

  // big forms: slabs, hollows and bulges tens of metres across
  vec4 bX = texture(uNoiseTex, fx * 0.0062 + 0.11);
  vec4 bZ = texture(uNoiseTex, fz * 0.0062 + 0.11);
  float big = bX.r * wx + bZ.r * wz;
  vec2 qX = bX.ba * 2.0 - 1.0, qZ = bZ.ba * 2.0 - 1.0;
  vec3 gBig = vec3(0.0, qX.y, qX.x) * wx + vec3(qZ.x, qZ.y, 0.0) * wz;

  // bedding: the rock lies in layers, tilted and gently folded, thick beds and thin ones
  float by = wp.y + dot(wp.xz, vec2(0.12, 0.07)) + 26.0 * sin(dot(wp.xz, vec2(0.0041, 0.0027))) + 11.0 * sin(dot(wp.xz, vec2(-0.0083, 0.0119)) + 1.3) + (big - 0.5) * 16.0;
  vec4 bedA = texture(uNoiseTex, vec2(by * 0.0047, 0.31));
  vec4 bedB = texture(uNoiseTex, vec2(by * 0.026, 0.77));
  // the layering shows clearly on some slabs and is lost on others
  float bedK = smoothstep(0.38, 0.62, big * 0.7 + nA.g * 0.3);
  float bed = mix(big, bedA.r * 0.6 + bedB.r * 0.4, bedK);
  float seam = smoothstep(0.44, 0.33, bedB.r) * (0.5 + 0.5 * smoothstep(0.35, 0.6, bedA.g)) * bedK;
  float bedSlope = ((bedA.b * 2.0 - 1.0) * 0.4 + (bedB.b * 2.0 - 1.0) * 0.7) * bedK;

  // joints: thin cracks running down the face
  float jn = texture(uNoiseTex, fx * vec2(0.047, 0.0055) + 0.63).g * wx
           + texture(uNoiseTex, fz * vec2(0.047, 0.0055) + 0.63).g * wz;
  float crack = smoothstep(0.03, 0.0, abs(jn - 0.5)) * smoothstep(0.3, 0.6, detail);
  // fractures that split the face into blocks
  crack = max(crack, smoothstep(0.022, 0.0, abs(detail - 0.5)) * smoothstep(0.45, 0.7, big) * 0.8);

  float slope = 1.0 - N.y;
  float high = smoothstep(330.0, 620.0, wp.y + nA.r * 140.0);
  float rock = smoothstep(0.24, 0.40, slope + (nB.r - 0.5) * 0.16 + (detail - 0.5) * 0.10 + high * 0.12);
  float sand = (1.0 - smoothstep(1.5, 6.5, wp.y + (nB.g - 0.5) * 5.0)) * (1.0 - rock * 0.7);

  vec2 gB = nB.ba * 2.0 - 1.0;
  vec2 gC = nC.ba * 2.0 - 1.0;
  float nearK = 1.0 / (1.0 + dist * 0.004);
  vec3 gVeg = vec3(gB.x, 0.0, gB.y) * 1.3 + vec3(gC.x, 0.0, gC.y) * (1.2 * nearK);
  vec3 gFace = gRock + gBig * 2.2 + gFine * (0.9 * nearK) + vec3(0.0, bedSlope, 0.0);
  vec3 Nd = bump(N, mix(gVeg, gFace, rock), mix(0.5, 0.6, rock));

  // grey limestone: pale on the hard beds, dark in the seams and where water runs down
  float tone = smoothstep(0.15, 0.85, streak * 0.36 + bed * 0.26 + detail * 0.2 + big * 0.18);
  vec3 rockCol = mix(vec3(0.135, 0.14, 0.148), vec3(0.34, 0.34, 0.325), tone);
  rockCol = mix(rockCol, rockCol * vec3(1.12, 0.98, 0.80), smoothstep(0.45, 0.7, nA.r) * 0.8);
  rockCol *= 0.78 + 0.44 * mix(detail, fine, 0.5 * nearK + 0.25);
  rockCol *= 1.0 - 0.35 * seam * (0.4 + 0.6 * detail);
  rockCol *= 1.0 - 0.6 * crack;
  rockCol *= 0.62 + 0.76 * smoothstep(0.25, 0.75, big); // hollows sit darker than the slabs standing proud
  rockCol *= mix(1.0, 0.6, smoothstep(0.56, 0.78, streak) * (0.4 + 0.6 * uRain));
  // moss and scrub hold on in the seams and on anything that is not quite vertical
  float moss = smoothstep(0.55, 0.85, nB.r * 0.5 + seam * 0.45 + (1.0 - slope) * 0.75 + (fine - 0.5) * 0.3) * (1.0 - high * 0.7);
  rockCol = mix(rockCol, vec3(0.028, 0.048, 0.024) * (0.6 + 0.8 * nC.r), moss * 0.7);

  vec3 vegCol = mix(vec3(0.010, 0.022, 0.012), vec3(0.030, 0.055, 0.024), nB.r);
  vegCol *= 0.55 + 0.9 * nC.r;
  vegCol = mix(vegCol, vec3(0.02, 0.034, 0.024), 0.3 * nA.r);

  vec3 sandCol = mix(vec3(0.18, 0.168, 0.145), vec3(0.25, 0.238, 0.205), nC.g);

  vec3 albedo = mix(vegCol, rockCol, rock);
  albedo = mix(albedo, sandCol, sand);
  float wetLine = 1.0 - smoothstep(0.1, 1.8, wp.y);
  albedo *= mix(1.0, 0.5, wetLine);

  // the airbase: asphalt runway with white markings, concrete apron, taxiways and shelter bays
  // with yellow lines, a paved forecourt under the temple wall, grass verges; puddles in the rain
  vec2 fl = fieldUV(wp);
  float onField = 0.0, fieldWet = 0.0;
  if (abs(wp.y - uFieldC.y) < 0.6 && abs(fl.x) < ${(Fc.U+1).toFixed(1)} && fl.y > ${(Fc.FORE[2]-1).toFixed(1)} && fl.y < ${Fc.V1.toFixed(1)}) {
    vec4 s1 = texture(uNoiseTex, wp.xz * 0.31 + 0.13);
    vec4 s2 = texture(uNoiseTex, wp.xz * 1.7 + 0.61);
    vec4 s3 = texture(uNoiseTex, wp.xz * 0.045 + 0.37);
    float puddle = smoothstep(0.6, 0.7, s3.r * 0.7 + s1.g * 0.3) * (0.3 + 0.7 * uRain);
    float u = fl.x, v = fl.y, av = abs(v);
    float wear = smoothstep(0.12, 0.4, s1.b);
    vec3 white = vec3(0.52, 0.52, 0.5) * (0.6 + 0.4 * wear);
    vec3 yellow = vec3(0.5, 0.36, 0.06) * (0.6 + 0.4 * wear);
    if (abs(u) < HALF_L && av < HALF_W) {
      // asphalt, darker where the tyres touch down
      vec3 tar = vec3(0.05, 0.051, 0.054) * (0.8 + 0.4 * s2.r) * (0.9 + 0.2 * s3.g);
      float endD = HALF_L - abs(u);
      float rubber = smoothstep(80.0, 160.0, endD) * smoothstep(560.0, 380.0, endD) * smoothstep(12.0, 4.0, av);
      tar *= 1.0 - 0.35 * rubber * texture(uNoiseTex, vec2(u * 0.004, v * 0.4)).g;
      float paint = 0.0;
      if (av > HALF_W - 1.6 && av < HALF_W - 0.7) paint = 1.0; // edge lines
      if (av < 0.45 && endD > 60.0 && mod(u + HALF_L, 50.0) < 30.0) paint = 1.0; // centre line
      if (endD > 6.0 && endD < 36.0 && av > 3.0 && av < 17.4 && fract((av - 3.0) / 3.6) < 0.5) paint = 1.0; // threshold bars
      if (endD > 150.0 && endD < 195.0 && av > 6.0 && av < 15.0) paint = 1.0; // aiming point
      for (int k = 0; k < 2; k++) {
        float d0 = k == 0 ? 300.0 : 450.0;
        if (endD > d0 && endD < d0 + 22.5 && av > 6.0 && av < 13.5 && fract((av - 6.0) / 2.5) < 0.6) paint = 1.0; // touchdown zone
      }
      albedo = mix(tar, white, paint);
      onField = 1.0;
    } else {
      bool apron = (u > -480.0 && u < -150.0 && v > -165.0 && v < -65.0)
        || (u > -150.0 && u < 50.0 && v > -185.0 && v < -120.0);
      bool taxi = inTaxi(u, v, -440.0, -65.0) || inTaxi(u, v, -180.0, -65.0) || inTaxi(u, v, 20.0, -120.0);
      if (apron || taxi) {
        // concrete slabs with dark joints
        vec2 pj = abs(fract(fl / 7.5) - 0.5);
        float joint = smoothstep(0.47, 0.5, max(pj.x, pj.y));
        albedo = vec3(0.13, 0.13, 0.125) * (0.85 + 0.3 * s2.r) * (0.9 + 0.2 * s3.b) * (1.0 - 0.45 * joint);
        float line = 0.0;
        for (int k = 0; k < 3; k++) {
          float c = k == 0 ? -440.0 : (k == 1 ? -180.0 : 20.0);
          if (abs(u - c) < 0.3 && v < -HALF_W && v > (k == 2 ? -135.0 : -88.0)) line = 1.0;
        }
        if (abs(v + 88.0) < 0.3 && u > -440.0 && u < -150.0) line = 1.0;
        if (abs(v + 135.0) < 0.3 && u > -150.0 && u < 20.0) line = 1.0;
        albedo = mix(albedo, yellow, line);
        onField = 1.0;
      } else if (u > ${Fc.FORE[0].toFixed(1)} && u < ${Fc.FORE[1].toFixed(1)} && v < ${Fc.V0.toFixed(1)} + 4.0) {
        // stone paving in the forecourt
        vec2 pj = abs(fract(fl / vec2(1.6, 0.8) + vec2(0.0, floor(fl.x / 1.6) * 0.5)) - 0.5);
        albedo = vec3(0.12, 0.115, 0.1) * (0.8 + 0.4 * s2.g) * (1.0 - 0.4 * smoothstep(0.44, 0.5, max(pj.x, pj.y)));
        onField = 1.0;
      } else {
        // mown grass on the verges
        albedo = mix(vec3(0.018, 0.03, 0.012), vec3(0.04, 0.058, 0.022), s2.g) * (0.75 + 0.5 * s1.r);
        rock = 0.0;
        Nd = normalize(mix(N, Nd, 0.4));
      }
    }
    if (onField > 0.0) {
      albedo *= mix(1.0, 0.55, puddle);
      fieldWet = mix(0.15, 1.0, puddle) * (0.3 + 0.7 * uRain);
      Nd = N;
      rock = 0.0;
    }
  }

  // moonlight with baked terrain shadow
  float hs = terrainHS(wp.xz).g;
  float sh = smoothstep(-9.0, -1.0, wp.y - hs);
  float ao = mix(0.3, 1.0, vAO);
  // sky light: stronger from above and from the bright part of the sky around the moon
  vec3 moonFlat = normalize(vec3(uMoonDir.x, 0.0, uMoonDir.z));
  float skyK = (0.45 + 0.55 * Nd.y) * (0.8 + 0.6 * max(dot(Nd, moonFlat), 0.0));
  vec3 light = (uAmbient * skyK + uFogAmbient * 0.35) * ao;
  light += uMoonColor * max(dot(Nd, uMoonDir), 0.0) * sh;

  // lightning
  vec3 toF = uFlashPos - wp;
  float df = length(toF);
  vec3 Lf = toF / df;
  float att = 1.0 / (1.0 + (df * df) / (1500.0 * 1500.0));
  light += uFlashColor * uFlash * (max(dot(Nd, Lf), 0.0) * 0.85 + 0.15 * ao) * att;
  light += lampLight(wp, Nd);
  light += beamLight(wp, Nd);
  vec3 V = normalize(uCamPos - wp);
  vec3 lampSpec = vec3(0.0);
  if (abs(wp.y - uFieldC.y) < 0.6 && abs(fl.x) < HALF_L + 30.0 && abs(fl.y) < HALF_W + 30.0) light += fieldLamps(wp, Nd, V, fieldWet, fl, lampSpec);

  vec3 col = albedo * light + lampSpec;

  // rain-wet sheen
  float gloss = mix(0.12, 0.55, rock) * (0.3 + 0.7 * uRain) + wetLine * 0.4 + fieldWet * 0.8;
  col += uMoonColor * pow(max(dot(Nd, normalize(uMoonDir + V)), 0.0), 48.0) * gloss * sh * 0.5;
  col += uFlashColor * uFlash * att * pow(max(dot(Nd, normalize(Lf + V)), 0.0), 48.0) * gloss * 0.5;

  gl_FragColor = vec4(col, 1.0);
}
`;async function Bc(e=()=>{},n={}){let r=new gc(7),a=new Float32Array(lc*lc),o=sc/2,s=n.field===!1?null:Ic(r);for(let t=0;t<lc;t++){let n=-o+t*8;for(let e=0;e<lc;e++)a[t*lc+e]=Mc(r,-o+e*8,n,s);t%24==0&&(e(t/lc*.75),await Lc())}function c(e,t){let n=Math.min(cc-.001,Math.max(0,(e+o)/8)),r=Math.min(cc-.001,Math.max(0,(t+o)/8)),i=Math.floor(n),s=Math.floor(r),c=n-i,l=r-s,u=a[s*lc+i],d=a[s*lc+i+1],f=a[(s+1)*lc+i],p=a[(s+1)*lc+i+1];return Ac(Ac(u,d,c),Ac(f,p,c),l)}function l(e,t){let n=c(e+5,t)-c(e-5,t),r=c(e,t+5)-c(e,t-5);return 10/Math.sqrt(n*n+r*r+100)}let d=null;if(s){let[e,t]=Fc.TEMPLE;d={x:s.x+s.dx*e+s.rx*t,z:s.z+s.dz*e+s.rz*t,y:Fc.Y2,dirX:s.rx,dirZ:s.rz}}for(let e=-Math.PI/2+.28;e<-Math.PI/2+1&&!s;e+=.008){let t=Tc(e),n=Math.cos(e),r=Math.sin(e);for(let e of[-1,1])for(let i=150;i<=400;i+=12){let a=t+e*i,o=n*a,s=r*a,l=c(o,s);if(l<120||l>290)continue;let u=0;for(let e=0;e<8;e++)for(let t of[22,44])u=Math.max(u,Math.abs(c(o+Math.cos(e*.785)*t,s+Math.sin(e*.785)*t)-l));let f=t+e*(i-95),p=l-c(n*f,r*f),m=u-Math.min(p,140)*.12;(!d||m<d.score)&&(d={score:m,x:o,z:s,y:l,dirX:-e*n,dirZ:-e*r})}}if(d&&!s){let e=Math.max(0,Math.floor((d.x-92+o)/8)),t=Math.min(cc,Math.ceil((d.x+92+o)/8)),n=Math.max(0,Math.floor((d.z-92+o)/8)),r=Math.min(cc,Math.ceil((d.z+92+o)/8));for(let i=n;i<=r;i++)for(let n=e;n<=t;n++){let e=Math.hypot(-o+n*8-d.x,-o+i*8-d.z);a[i*lc+n]=Ac(a[i*lc+n],d.y,1-jc(48,92,e))}}let f=new Float32Array(lc*lc),p=8*Math.tan(uc);for(let e=0;e<lc;e++){let t=-1e9;for(let n=lc-1;n>=0;n--){let r=e*lc+n;t-=p,a[r]>t&&(t=a[r]),f[r]=t}}e(.8),await Lc();let m=new Float32Array(lc*lc),h=[[1,0],[.7071,.7071],[0,1],[-.7071,.7071],[-1,0],[-.7071,-.7071],[0,-1],[.7071,-.7071]],g=[3,9,24];for(let t=0;t<lc;t++){for(let e=0;e<lc;e++){let n=a[t*lc+e],r=0;for(let i=0;i<8;i++){let o=0;for(let r=0;r<3;r++){let s=Math.min(cc,Math.max(0,Math.round(e+h[i][0]*g[r]))),c=(a[Math.min(cc,Math.max(0,Math.round(t+h[i][1]*g[r])))*lc+s]-n)/(g[r]*8);c>o&&(o=c)}r+=o/Math.sqrt(1+o*o)}m[t*lc+e]=1-r/8}t%128==0&&(e(.8+t/lc*.1),await Lc())}let _=new Uint16Array(lc*lc*2);for(let e=0;e<lc*lc;e++)_[e*2]=$t.toHalfFloat(a[e]),_[e*2+1]=$t.toHalfFloat(f[e]);let y=new Gn(_,lc,lc,v,u);y.minFilter=y.magFilter=i,y.wrapS=y.wrapT=t,y.needsUpdate=!0,Q.uHeightTex.value=y;let b=new Er({uniforms:{...Q},vertexShader:Rc,fragmentShader:zc()}),x=cc/8,S=x+1,C=new ut,w=(e,t)=>a[Math.min(cc,Math.max(0,t))*lc+Math.min(cc,Math.max(0,e))];for(let t=0;t<8;t++){for(let e=0;e<8;e++){let n=new Float32Array(S*S*3),r=new Float32Array(S*S*3),i=new Float32Array(S*S),s=0;for(let c=0;c<S;c++)for(let l=0;l<S;l++,s++){let u=e*x+l,d=t*x+c;n[s*3]=-o+u*8,n[s*3+1]=a[d*lc+u],n[s*3+2]=-o+d*8;let f=w(u-1,d)-w(u+1,d),p=w(u,d-1)-w(u,d+1),h=1/Math.sqrt(f*f+256+p*p);r[s*3]=f*h,r[s*3+1]=16*h,r[s*3+2]=p*h,i[s]=m[d*lc+u]}let c=new Uint16Array(x*x*6),l=0;for(let e=0;e<x;e++)for(let t=0;t<x;t++){let r=e*S+t,i=r+1,a=r+S,o=a+1,s=n[r*3+1],u=n[i*3+1],d=n[a*3+1],f=n[o*3+1];Math.abs(s-f)<Math.abs(u-d)?(c[l++]=r,c[l++]=a,c[l++]=o,c[l++]=r,c[l++]=o,c[l++]=i):(c[l++]=r,c[l++]=a,c[l++]=i,c[l++]=i,c[l++]=a,c[l++]=o)}let u=new vn;u.setAttribute(`position`,new rn(n,3)),u.setAttribute(`normal`,new rn(r,3)),u.setAttribute(`aAO`,new rn(i,1)),u.setIndex(new rn(c,1)),u.computeBoundingSphere();let d=new Hn(u,b);d.matrixAutoUpdate=!1,C.add(d)}e(.9+(t+1)/8*.1),await Lc()}return{group:C,heightTex:y,sample:c,flatness:l,site:d,field:s,material:b}}var Vc=[[211,.02,.65,.45,0],[352,-.05,.48,.6,1.7],[547,.09,.32,1.4,4.1],[777,-.16,.18,2.2,2.6],[268,.07,.4,.15,5.3]],Hc=Vc.reduce((e,t)=>e+t[2],0),Uc=230,Wc=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)};function Gc(e,t,n,r){let i=-r.sample(e,t);if(i<=.3)return 0;let a=Math.atan2(t,e),o=Math.hypot(e,t)-Tc(a),s=0;for(let[e,t,r,i,c]of Vc)s+=r*Math.sin(e*a+t*o-i*n+c);return s*Wc(.3,5,i)*(.6+.5*Q.uRain.value)}var Kc=`
attribute vec3 aRiver; // ring angle, distance across, slope of the centre line
varying vec3 vWorldPos;
varying vec3 vWave;    // xy = slope of the wave surface, z = how near a crest (-1..1)
${bc}
void main() {
  vec3 p = position;
  float th = aRiver.x, c = aRiver.y;
  float depth = -terrainHS(p.xz).r;
  float amp = smoothstep(0.3, 5.0, depth) * (0.6 + 0.5 * uRain);
  float h = 0.0, dth = 0.0, dc = 0.0, ph;
${Vc.map(([e,t,n,r,i])=>`  ph = ${e.toFixed(1)} * th + ${t.toFixed(3)} * c - ${r.toFixed(3)} * uTime + ${i.toFixed(2)}; h += ${n.toFixed(3)} * sin(ph); dth += ${(n*e).toFixed(3)} * cos(ph); dc += ${(n*t).toFixed(5)} * cos(ph);`).join(`
`)}
  p.y += h * amp;
  float r = max(length(p.xz), 1.0);
  vec2 radial = p.xz / r;
  vec2 tang = vec2(-radial.y, radial.x);
  vWave = vec3((tang * ((dth - dc * aRiver.z) / r) + radial * dc) * amp, h / ${Hc.toFixed(3)});
  vWorldPos = p;
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}
`,qc=`
varying vec3 vWorldPos;
varying vec3 vWave;
${bc}
${xc}

vec2 gradAt(vec2 uv) {
  return texture(uNoiseTex, uv).ba * 2.0 - 1.0;
}

// radius of the river centre line at ring angle th, and its slope
float riverC(float th, out float rd) {
  float r = ${Cc.toFixed(1)};
  rd = 0.0;
${wc.map(([e,t,n])=>`  r += ${t.toFixed(1)} * sin(${e.toFixed(1)} * th + ${n.toFixed(2)}); rd += ${(t*e).toFixed(1)} * cos(${e.toFixed(1)} * th + ${n.toFixed(2)});`).join(`
`)}
  return r;
}

// one expanding raindrop ring per cell
vec2 ripple(vec2 p, float t) {
  vec2 c = floor(p);
  vec2 f = fract(p);
  vec2 h = hash22(c);
  float tt = fract(t * (0.75 + 0.5 * h.y) + h.x * 13.0);
  vec2 dv = f - (0.5 + (h - 0.5) * 0.4);
  float d = length(dv);
  float rad = tt * 0.30;
  float ring = sin((d - rad) * 60.0) * smoothstep(0.05, 0.0, abs(d - rad)) * (1.0 - tt);
  return dv / max(d, 1e-4) * ring;
}

void main() {
  vec3 wp = vWorldPos;
  vec2 hs = terrainHS(wp.xz);
  float depth = -hs.r;
  float dist = length(wp - uCamPos);
  vec3 V = (uCamPos - wp) / dist;

  // River coordinates: arc runs once round the ring with the current, c is the
  // distance across from the centre line. Noise laid out in these coordinates and slid
  // along arc follows every bend, so the water visibly streams downriver.
  float r = max(length(wp.xz), 1.0);
  vec2 radial = wp.xz / r;
  vec2 tang = vec2(-radial.y, radial.x);
  float th = atan(wp.z, wp.x);
  float rd;
  float c = r - riverC(th, rd);
  float arc = th / 6.2831853;
  vec2 fdir = normalize(tang + radial * (rd / r));
  vec2 cdir = vec2(fdir.y, -fdir.x);
  float deepK = smoothstep(0.0, 9.0, depth);

  // screen-space rates of change, worked out by hand because atan() jumps at one angle
  vec2 dArc = tang / (6.2831853 * r);
  vec2 dC = radial - tang * (rd / r);
  vec2 dxw = dFdx(wp.xz), dyw = dFdy(wp.xz);
  float ax = dot(dArc, dxw), ay = dot(dArc, dyw);
  float cx = dot(dC, dxw), cy = dot(dC, dyw);
  #define FLOW(N, SC, SP, CC, OFF) textureGrad(uNoiseTex, vec2(arc * N - uTime * SP, (CC) * SC) + OFF, vec2(ax * N, cx * SC), vec2(ay * N, cy * SC))

  // standing waves and boils, nearly fixed in place while the water tears through them
  vec4 L1 = FLOW(246.0, 0.024, 0.035, c, vec2(0.13, 0.40));
  float wob = (L1.r - 0.5) * 9.0;
  // long streaks carried at the speed of the current
  vec4 L2 = FLOW(110.0, 0.080, 0.070, c + wob, vec2(0.57, 0.10));
  // fast broken water on top
  vec4 L3 = FLOW(492.0, 0.110, 0.52, c + wob * 0.6, vec2(0.30, 0.80));
  // a slower sheet near the banks, so the middle of the channel is seen to run faster
  vec4 L4 = FLOW(328.0, 0.070, 0.17, c - wob, vec2(0.81, 0.27));

  vec2 g1 = L1.ba * 2.0 - 1.0, g2 = L2.ba * 2.0 - 1.0, g3 = L3.ba * 2.0 - 1.0, g4 = L4.ba * 2.0 - 1.0;
  vec2 g = vec2(0.0);
  g += (fdir * g1.x * 0.70 + cdir * g1.y) * 1.10;
  g += (fdir * g2.x * 0.10 + cdir * g2.y) * 0.85;
  g += (fdir * g3.x * 0.30 + cdir * g3.y) * mix(0.35, 0.75, deepK);
  g += (fdir * g4.x * 0.35 + cdir * g4.y) * mix(0.70, 0.25, deepK);
  // wind chop across the lot
  g += gradAt((wp.xz + uWind * uTime * 0.35) * 0.27) * 0.45;
  g += gradAt((wp.xz - uWind.yx * uTime * 0.2) * 0.71) * 0.30;

  float chop = 0.30 + 0.26 * uRain + 0.014 * length(uWind);
  vec3 N = normalize(vec3(-g.x * chop - vWave.x, 1.0, -g.y * chop - vWave.y));

  float rf = (1.0 - smoothstep(30.0, 200.0, dist)) * uRain;
  if (rf > 0.01) {
    vec2 rp = ripple(wp.xz * 0.8, uTime * 1.1) + ripple(wp.xz * 1.37 + 7.7, uTime * 1.4 + 0.37) * 0.8;
    N = normalize(N + vec3(rp.x, 0.0, rp.y) * 0.35 * rf);
  }

  float fres = 0.02 + 0.98 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
  vec3 R = reflect(-V, N);
  R.y = abs(R.y) + 0.02;
  R = normalize(R);

  // reflected sky, blocked by cliffs: march the reflected ray over the height map
  // the reflected ray also crosses the mist, so the river mirrors a pale, hazy sky
  vec3 sky = mix(skyColor(R), uFogAmbient * 1.1 + uFlashColor * uFlash * 0.05, 0.5);
  float occ = 0.0;
  float hitT = 0.0;
  float hitLit = 0.0;
  float t = 5.0;
  for (int i = 0; i < 12; i++) {
    vec3 p = wp + R * t;
    vec2 th = terrainHS(p.xz);
    float o = smoothstep(-1.0, 4.0 + t * 0.03, th.r - p.y);
    if (o > occ) {
      occ = o;
      hitT = t;
      hitLit = smoothstep(-9.0, -1.0, th.r - th.g);
    }
    t *= 1.7;
  }
  vec3 flash = uFlashColor * uFlash;
  vec3 terr = vec3(0.075, 0.09, 0.08) * (uAmbient * 0.7 + uMoonColor * 0.25 * hitLit + flash * 0.4);
  terr = mix(terr, uFogAmbient, 1.0 - exp(-hitT * 0.0009));
  vec3 refl = mix(sky, terr, occ);

  // water body: turbid green in the shallows, near black where deep
  float sh = smoothstep(-9.0, -1.0, -hs.g);
  // a searchlight on the river lights the silt in the water and the rain-roughened surface
  vec3 beam = beamLight(wp, vec3(0.0, 1.0, 0.0));
  vec3 lightLevel = uAmbient * 4.0 + uMoonColor * sh * 0.6 + flash * 1.5 + beam * 3.0;
  // flood water carries silt: murky brown-green, never quite black
  vec3 body = mix(vec3(0.060, 0.066, 0.045), vec3(0.020, 0.030, 0.026), 1.0 - exp(-depth * 0.3)) * lightLevel;

  vec3 col = mix(body, refl, fres) + beam * (0.035 + 0.05 * uRain);

  // moon glitter and lightning glint
  float spec = pow(max(dot(N, normalize(uMoonDir + V)), 0.0), 350.0);
  col += uMoonColor * min(spec * 6.0, 3.0) * sh;
  vec3 Lf = normalize(uFlashPos - wp);
  col += flash * pow(max(dot(N, normalize(Lf + V)), 0.0), 200.0) * 2.0;

  // foam along the shore and around rocks
  float shore = 1.0 - smoothstep(0.0, 0.9, depth);
  float foam = smoothstep(0.55, 0.85, shore * 0.8 + L3.r * 0.6 - 0.1);
  // white water out in the stream: torn streaks, and crests breaking on the standing waves
  float storm = 0.55 + 0.45 * uRain;
  float streaks = smoothstep(0.54, 0.74, L2.r * 0.72 + L3.r * 0.28 + (L1.r - 0.5) * 0.3);
  float caps = smoothstep(0.62, 0.82, L1.r) * smoothstep(0.38, 0.62, L3.g);
  // the tops of the real waves break too
  caps = max(caps, smoothstep(0.3, 0.75, vWave.z + (L3.r - 0.5) * 0.5) * 0.75);
  float edge = smoothstep(0.52, 0.74, L4.r) * (1.0 - deepK) * 0.6;
  float open = smoothstep(0.2, 2.5, depth);
  foam = max(foam, clamp(streaks * 0.55 + caps * 0.85 + edge, 0.0, 1.0) * storm * open);
  vec3 foamCol = vec3(0.50, 0.55, 0.60) * (uAmbient * 3.4 + uMoonColor * sh * 0.8 + flash + beam);
  col = mix(col, foamCol, foam * 0.72);

  float alpha = smoothstep(-0.05, 0.5, depth);
  gl_FragColor = vec4(col, alpha);
}
`;function Jc(){let e=new Er({uniforms:{...Q},vertexShader:Kc,fragmentShader:qc,transparent:!0,depthWrite:!0}),t=new ut;for(let n=0;n<16;n++){let r=new Float32Array(39975),i=new Float32Array(39975),a=0;for(let e=0;e<205;e++){let t=-Math.PI+(n*204+e)/3264*Math.PI*2,o=Tc(t),s=Ec(t),c=Math.cos(t),l=Math.sin(t);for(let e=0;e<65;e++,a++){let n=-230+e/64*2*Uc;r[a*3]=c*(o+n),r[a*3+1]=0,r[a*3+2]=l*(o+n),i[a*3]=t,i[a*3+1]=n,i[a*3+2]=s}}let o=new Uint16Array(78336),s=0;for(let e=0;e<204;e++)for(let t=0;t<64;t++){let n=e*65+t,r=n+1,i=n+65,a=i+1;o[s++]=n,o[s++]=r,o[s++]=i,o[s++]=r,o[s++]=a,o[s++]=i}let c=new vn;c.setAttribute(`position`,new rn(r,3)),c.setAttribute(`aRiver`,new rn(i,3)),c.setIndex(new rn(o,1)),c.computeBoundingSphere(),c.boundingSphere.radius+=3;let l=new Hn(c,e);l.matrixAutoUpdate=!1,l.renderOrder=1,t.add(l)}return t}var Yc=`
uniform sampler2D tDepth;
uniform mat4 uProjInv;
uniform mat4 uCamWorld;
uniform float uNear;
uniform float uFar;

float viewZ(float d) {
  float z = d * 2.0 - 1.0;
  return 2.0 * uNear * uFar / (uFar + uNear - z * (uFar - uNear));
}
// view-space direction through a screen position
vec3 viewDir(vec2 uv) {
  vec4 c = uProjInv * vec4(uv * 2.0 - 1.0, 1.0, 1.0);
  return normalize(c.xyz / c.w);
}
`,Xc=`
precision highp sampler3D;
varying vec2 vUv;
uniform sampler3D uNoise3D;
uniform float uMaxDist;
${bc}
${Yc}

float ign(vec2 p) {
  return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715))));
}
float hg(float c, float g) {
  float g2 = g * g;
  return (1.0 - g2) / (4.0 * PI * pow(1.0 + g2 - 2.0 * g * c, 1.5));
}

// Extinction per metre at a point; also returns the moon-shadow height there.
// nearFade is 0 right at the camera and 1 a few hundred metres out.
float mistDensity(vec3 p, float ceilK, float nearFade, out float shadowH) {
  vec2 hs = terrainHS(p.xz);
  shadowH = hs.g;
  float above = p.y - max(hs.r, 0.0);

  vec3 w = vec3(uWind.x, 0.0, uWind.y) * uTime;
  vec3 q = (p + w) / 700.0;
  q.y *= 2.2;
  float n1 = texture(uNoise3D, q).r;
  float n2 = texture(uNoise3D, q * 3.7 + vec3(0.0, uTime * 0.006, 0.0) + n1 * 0.3).g;
  float n = n1 * 0.68 + n2 * 0.32;

  float y = max(p.y, 0.0);
  // even haze pooled in the valley: each ridge further away fades a step paler
  float haze = 0.00125 * exp(-y / 240.0);
  // broken cloud banks low in the gorge and higher against the cliffs
  float b1 = (p.y - 42.0) / 38.0;
  float bank = exp(-b1 * b1) * smoothstep(0.46, 0.70, n);
  float b2 = (p.y - 300.0) / 85.0;
  float band = exp(-b2 * b2) * smoothstep(0.50, 0.74, n);
  // thin mist lying on the river
  float low = exp(-y / 22.0) * smoothstep(0.34, 0.66, n2 * 0.6 + n1 * 0.4);
  // wisps clinging to slopes and ridges
  float hug = exp(-max(above, 0.0) / 45.0) * smoothstep(0.44, 0.72, n) * smoothstep(30.0, 150.0, p.y);
  // peaks fade into the cloud base
  float cap = smoothstep(430.0, 700.0, p.y + n * 180.0) * ceilK;

  // the thick banks thin out right around the camera so the view never whites out
  float d = haze * (0.35 + 0.65 * nearFade) + low * 0.005 + (bank * 0.015 + band * 0.012 + hug * 0.014) * nearFade + cap * 0.014;
  return d * uMist + 0.00016 + uRain * 0.0002;
}

void main() {
  float d = texture(tDepth, vUv).x;
  vec3 vd = viewDir(vUv);
  vec3 rd = normalize(mat3(uCamWorld) * vd);
  bool isSky = d >= 0.99999;
  float maxD = isSky ? uMaxDist : min(viewZ(d) / max(-vd.z, 1e-4), uMaxDist);
  // nothing to march above the mist top
  float top = isSky ? 560.0 : 1000.0;
  if (rd.y > 0.0 && uCamPos.y < top) maxD = min(maxD, (top - uCamPos.y) / rd.y);

  float jitter = ign(gl_FragCoord.xy);
  float phM = hg(dot(rd, uMoonDir), 0.62) * 0.42 + 0.05;
  float ceilK = isSky ? 0.0 : 1.0;

  vec3 scat = vec3(0.0);
  float trans = 1.0;
  float tA = 0.0;
  for (int i = 0; i < STEPS; i++) {
    float f = float(i + 1) / float(STEPS);
    float tB = maxD * f * f;
    float dt = tB - tA;
    float tS = tA + dt * jitter;
    vec3 p = uCamPos + rd * tS;
    tA = tB;

    float shadowH;
    float dens = mistDensity(p, ceilK, smoothstep(20.0, 260.0, tS), shadowH);
    float a = 1.0 - exp(-dens * dt);

    float lit = smoothstep(-20.0, 20.0, p.y - shadowH) * (exp(-dens * 70.0) * 0.85 + 0.15);
    vec3 Li = uFogAmbient * (0.7 + 0.5 * smoothstep(0.0, 350.0, p.y));
    Li += uMoonColor * lit * phM;
    vec3 tf = uFlashPos - p;
    Li += uFlashColor * uFlash * (0.02 + 0.5 / (1.0 + dot(tf, tf) / (280.0 * 280.0)));
    vec3 tb = uBlastPos - p;
    Li += uBlastColor * (0.15 * 900.0 / (dot(tb, tb) + 900.0));

    scat += trans * a * Li;
    trans *= 1.0 - a;
    if (trans < 0.01) break;
  }
  gl_FragColor = vec4(scat, trans);
}
`,Zc=`
varying vec2 vUv;
uniform sampler2D tColor;
uniform sampler2D tFog;
uniform vec2 uFogRes;
${bc}
${xc}
${Yc}

void main() {
  float d = texture(tDepth, vUv).x;
  vec3 vd = viewDir(vUv);
  vec3 rd = normalize(mat3(uCamWorld) * vd);
  bool isSky = d >= 0.99999;
  vec3 col = isSky ? skyColor(rd) : texture(tColor, vUv).rgb;

  vec2 fp = vUv * uFogRes - 0.5;
  vec2 base = floor(fp);
  vec2 fr = fp - base;
  float zc = viewZ(d);
  vec4 acc = vec4(0.0);
  float wsum = 0.0;
  for (int j = 0; j < 2; j++) {
    for (int i = 0; i < 2; i++) {
      vec2 tuv = (base + vec2(float(i), float(j)) + 0.5) / uFogRes;
      vec4 fg = texture(tFog, tuv);
      float zs = viewZ(texture(tDepth, tuv).x);
      float wb = (i == 0 ? 1.0 - fr.x : fr.x) * (j == 0 ? 1.0 - fr.y : fr.y);
      float w = (wb + 0.02) / (0.02 + abs(zc - zs) / zc);
      acc += fg * w;
      wsum += w;
    }
  }
  vec4 fog = acc / wsum;
  col = col * fog.a + fog.rgb;

  // warm halo where the temple lanterns light the mist around them
  vec3 toL = uTemplePos - uCamPos;
  float tL = dot(toL, rd);
  if (tL > 0.0) {
    float b2 = dot(toL, toL) - tL * tL;
    float sceneD = isSky ? 1e9 : viewZ(d) / max(-vd.z, 1e-4);
    float vis = smoothstep(-70.0, -10.0, sceneD - tL);
    float halo = pow(900.0 / (b2 + 900.0), 1.5);
    col += uLampColor * halo * vis * (0.06 + 0.1 * min(uMist, 1.5)) * exp(-tL * 0.0005);
  }

  // fire glowing through the mist around an explosion or a burning wreck
  if (uBlastColor.r > 0.0) {
    vec3 toB = uBlastPos - uCamPos;
    float tB = max(dot(toB, rd), 0.0);
    float bb = dot(toB, toB) - tB * tB;
    float sceneB = isSky ? 1e9 : viewZ(d) / max(-vd.z, 1e-4);
    float visB = smoothstep(-60.0, -5.0, sceneB - tB);
    float haloB = pow(900.0 / (bb + 900.0), 1.5);
    col += uBlastColor * haloB * visB * (0.01 + 0.02 * min(uMist, 1.5)) * exp(-tB * 0.0005);
  }
  gl_FragColor = vec4(col, 1.0);
}
`,Qc=class extends Rs{constructor(e,t,n,{fogScale:a=.5,steps:o=32}={}){super(),this.scene=e,this.camera=t,this.overlay=n,this.fogScale=a,this.needsSwap=!0,this.depthTex=new sr(4,4),this.depthTex.minFilter=this.depthTex.magFilter=r,this.sceneRT=new Fe(4,4,{type:u,depthTexture:this.depthTex,minFilter:i,magFilter:i}),this.fogRT=new Fe(4,4,{type:u,depthBuffer:!1,minFilter:i,magFilter:i});let s={tDepth:{value:this.depthTex},uProjInv:{value:t.projectionMatrixInverse},uCamWorld:{value:t.matrixWorld},uNear:{value:t.near},uFar:{value:t.far}};this.fogMat=new Er({uniforms:{...Q,...s,uMaxDist:{value:4500}},defines:{STEPS:o},vertexShader:Sc,fragmentShader:Xc,depthTest:!1,depthWrite:!1}),this.compMat=new Er({uniforms:{...Q,...s,tColor:{value:this.sceneRT.texture},tFog:{value:this.fogRT.texture},uFogRes:{value:new U(2,2)}},vertexShader:Sc,fragmentShader:Zc,depthTest:!1,depthWrite:!1}),this.fogQuad=new Vs(this.fogMat),this.compQuad=new Vs(this.compMat),this.size=new U(4,4)}setSteps(e){this.fogMat.defines.STEPS=e,this.fogMat.needsUpdate=!0}setSize(e,t){e=Math.max(2,Math.floor(e)),t=Math.max(2,Math.floor(t)),this.size.set(e,t),this.sceneRT.setSize(e,t);let n=Math.max(2,Math.ceil(e*this.fogScale)),r=Math.max(2,Math.ceil(t*this.fogScale));this.fogRT.setSize(n,r),this.compMat.uniforms.uFogRes.value.set(n,r)}render(e,t){e.setRenderTarget(this.sceneRT),e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(this.fogRT),this.fogQuad.render(e),e.setRenderTarget(this.renderToScreen?null:t),this.compQuad.render(e);let n=e.autoClear;e.autoClear=!1,e.render(this.overlay,this.camera),e.autoClear=n}dispose(){this.sceneRT.dispose(),this.fogRT.dispose(),this.fogMat.dispose(),this.compMat.dispose()}},$c={uniforms:{tDiffuse:{value:null},uExposure:{value:1.15},uSeed:{value:0},uWet:{value:0},uWetTime:{value:0},uAspect:{value:1}},vertexShader:Sc,fragmentShader:`
    varying vec2 vUv;
    uniform sampler2D tDiffuse;
    uniform float uExposure;
    uniform float uSeed;
    uniform float uWet;
    uniform float uWetTime;
    uniform float uAspect;

    vec3 h32(vec2 p) {
      vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
      p3 += dot(p3, p3.yxz + 33.33);
      return fract((p3.xxy + p3.yzz) * p3.zyx);
    }
    // Beads of water sitting on the glass. xy = how a bead bends the view, z = cover.
    vec3 beads(vec2 p, float t, float amount) {
      vec2 id = floor(p), f = fract(p) - 0.5;
      vec3 h = h32(id);
      vec3 k = h32(id + 71.3);
      float life = fract(t * (0.07 + 0.11 * h.z) + h.x * 9.0);
      float r = (0.10 + 0.20 * k.z) * smoothstep(h.y * 0.8, h.y * 0.8 + 0.2, amount);
      r *= (1.0 - life * life) * smoothstep(0.0, 0.06, life);
      vec2 d = f - (k.xy - 0.5) * 0.5;
      float m = smoothstep(r, r * 0.55, length(d)) * step(0.012, r);
      return vec3(-d / max(r, 0.012) * m, m);
    }
    // Drops driven outwards across the glass by the airflow, each dragging a tail.
    vec3 runs(vec2 q, float t, float amount) {
      const float LANES = 52.0;
      float a = atan(q.y, q.x) / 6.2831853 * LANES;
      float rad = length(q);
      float lane = floor(a);
      vec3 h = h32(vec2(lane, 3.0));
      float y = rad * 2.6 - t * (0.22 + 0.5 * h.x) + h.y * 10.0;
      float cell = floor(y), fy = fract(y);
      vec3 h2 = h32(vec2(lane, cell));
      float on = smoothstep(h2.x * 0.8, h2.x * 0.8 + 0.2, amount) * step(0.4, h2.y);
      float la = fract(a) - 0.5 + 0.12 * sin(y * 5.0 + h.z * 6.0);
      float w = 0.10 + 0.14 * smoothstep(0.55, 0.9, fy);
      float m = smoothstep(w, w * 0.4, abs(la)) * smoothstep(0.0, 0.85, fy) * smoothstep(0.98, 0.9, fy);
      m *= on * smoothstep(0.12, 0.45, rad);
      vec2 tang = vec2(-q.y, q.x) / max(rad, 1e-3);
      return vec3(tang * (-la / w) * m, m);
    }

    vec3 aces(vec3 x) {
      return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
    }
    float hash(vec2 p) {
      vec3 p3 = fract(vec3(p.xyx) * 0.1031);
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.x + p3.y) * p3.z);
    }
    void main() {
      vec2 uv = vUv;
      vec3 wet = vec3(0.0);
      if (uWet > 0.003) {
        vec2 q = (vUv - 0.5) * vec2(uAspect, 1.0);
        wet = beads(q * 8.0, uWetTime, uWet) + beads(q * 19.0 + 3.7, uWetTime * 1.4, uWet * 0.9) * 0.6
            + runs(q, uWetTime, uWet) * 0.85;
        wet.z = min(wet.z, 1.0);
        uv += wet.xy * vec2(1.0 / uAspect, 1.0) * 0.045;
      }
      vec3 c = texture(tDiffuse, uv).rgb;
      if (uWet > 0.003) {
        // a film of water softens the whole view a little
        vec2 px = vec2(0.0035 / uAspect, 0.0035) * uWet;
        vec3 soft = texture(tDiffuse, uv + px).rgb + texture(tDiffuse, uv - px).rgb
                  + texture(tDiffuse, uv + px * vec2(1.0, -1.0)).rgb + texture(tDiffuse, uv - px * vec2(1.0, -1.0)).rgb;
        c = mix(c, soft * 0.25, 0.6 * (1.0 - wet.z));
        // each drop: dark rim, a glint on the side facing the moon
        float rim = dot(wet.xy, wet.xy);
        c *= 1.0 - 0.3 * rim * wet.z;
        c += vec3(0.05, 0.06, 0.075) * wet.z * pow(max(dot(wet.xy, vec2(0.6, 0.8)), 0.0), 2.0);
      }
      c *= uExposure;
      c = aces(c);
      c = pow(c, vec3(1.0 / 2.2));
      c = mix(c, c * c * (3.0 - 2.0 * c), 0.4); // gentle S-curve: deeper shadows, brighter mist
      float l = dot(c, vec3(0.299, 0.587, 0.114));
      c = mix(vec3(l), c, 1.10);
      c *= vec3(0.96, 1.0, 1.05);
      vec2 q = vUv - 0.5;
      c *= 1.0 - dot(q, q) * 0.85;
      c += (hash(gl_FragCoord.xy + uSeed) - 0.5) * 0.02;
      gl_FragColor = vec4(c, 1.0);
    }
  `};function el(e){let t=Q.uNoise3D.value,n=t.image.data,r=t.image.width,i=e=>(e%r+r)%r,a=(e,t,a,o)=>{e=e*r-.5,t=t*r-.5,a=a*r-.5;let s=Math.floor(e),c=Math.floor(t),l=Math.floor(a),u=e-s,d=t-c,f=a-l,p=0;for(let e=0;e<2;e++)for(let t=0;t<2;t++)for(let a=0;a<2;a++){let m=(a?u:1-u)*(t?d:1-d)*(e?f:1-f);p+=m*n[((i(l+e)*r+i(c+t))*r+i(s+a))*2+o]}return p/255},o=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)};return(t,n)=>{let r=Q.uWind.value,i=(t.x+r.x*n)/700,s=t.y/700*2.2,c=(t.z+r.y*n)/700,l=a(i,s,c,0),u=a(i*3.7+l*.3,s*3.7+n*.006+l*.3,c*3.7+l*.3,1),d=l*.68+u*.32,f=Math.max(t.y,0),p=t.y-Math.max(e.sample(t.x,t.z),0),m=.00125*Math.exp(-f/240),h=(t.y-42)/38,g=(t.y-300)/85,_=Math.exp(-h*h)*o(.46,.7,d),v=Math.exp(-g*g)*o(.5,.74,d),y=Math.exp(-f/22)*o(.34,.66,u*.6+l*.4),b=Math.exp(-Math.max(p,0)/45)*o(.44,.72,d)*o(30,150,t.y),x=o(430,700,t.y+d*180);return(m+y*.005+_*.015+v*.012+b*.014+x*.014)*Q.uMist.value+16e-5+Q.uRain.value*2e-4}}var tl=28e3,nl=90,rl=700,il=`
uniform sampler2D tDepth;
uniform vec2 uRes;
bool hidden() {
  return gl_FragCoord.z > texture(tDepth, gl_FragCoord.xy / uRes).x;
}
`,al=`
attribute vec3 aOffset;
attribute float aRand;
uniform vec3 uCamPos;
uniform vec3 uCamVel;
uniform vec3 uRainVel;
uniform float uRainTime;
uniform float uBox;
varying float vAlpha;
varying vec2 vQ;
void main() {
  vec3 fall = uRainVel * (0.85 + 0.3 * aRand);
  // wrap every drop into a box that travels with the camera
  vec3 p = mod(aOffset * uBox + fall * uRainTime - uCamPos, uBox) - 0.5 * uBox;
  vec3 rel = fall - uCamVel; // streaks follow the motion relative to the camera
  float sp = length(rel);
  vec3 dir = rel / sp;
  float len = clamp(sp * 0.011, 0.3, 1.5);
  float dist = length(p);
  vec3 side = normalize(cross(dir, -p / max(dist, 1e-3)));
  float wdt = 0.002 + dist * 0.0006;
  vec3 world = uCamPos + p + dir * (position.y * len) + side * (position.x * wdt);
  vAlpha = smoothstep(uBox * 0.5, uBox * 0.3, dist) * smoothstep(0.6, 3.0, dist);
  vQ = position.xy;
  gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
}
`,ol=`
varying float vAlpha;
varying vec2 vQ;
uniform vec3 uRainColor;
${il}
void main() {
  if (hidden()) discard;
  float a = (1.0 - abs(vQ.x)) * sin(vQ.y * 3.14159);
  gl_FragColor = vec4(uRainColor * a * vAlpha, 1.0);
}
`,sl=`
attribute vec3 aOther;
attribute float aSide;
attribute float aU;
attribute float aBright;
varying float vU;
varying float vBright;
void main() {
  vec3 T = normalize(aOther - position);
  vec3 toCam = cameraPosition - position;
  float dist = length(toCam);
  vec3 side = normalize(cross(T, toCam / dist));
  float wdt = (2.5 + dist * 0.0065) * (0.45 + 0.55 * aBright);
  vU = aU;
  vBright = aBright;
  gl_Position = projectionMatrix * viewMatrix * vec4(position + side * aSide * wdt, 1.0);
}
`,cl=`
varying float vU;
varying float vBright;
uniform float uI;
uniform vec3 uBoltColor;
${il}
void main() {
  if (hidden()) discard;
  float core = exp(-vU * vU * 18.0);
  float glow = exp(-vU * vU * 3.0) * 0.2;
  gl_FragColor = vec4(uBoltColor * (core + glow) * vBright * uI, 1.0);
}
`,ll=class{constructor(e,t,n){this.terrain=e,this.audio=n,this.params={rain:.85,mist:1,wind:.45,lightning:.6},this.rng=dc(90210),this.windAngle=.35,this.rainTime=0,this.nextStrike=3.5,this.pulses=[],this.flashT=0,this.flashing=!1,this.flashScale=1,this.boltOn=!1,this.rainVel=new W(0,-42,0);let r={tDepth:{value:null},uRes:{value:new U(1,1)}};this.depthU=r;let i=new ai;i.setAttribute(`position`,new rn(new Float32Array([-1,0,0,1,0,0,-1,1,0,1,1,0]),3)),i.setIndex([0,1,2,2,1,3]);let a=new Float32Array(tl*3),o=new Float32Array(tl);for(let e=0;e<tl;e++)a[e*3]=this.rng(),a[e*3+1]=this.rng(),a[e*3+2]=this.rng(),o[e]=this.rng();i.setAttribute(`aOffset`,new Kn(a,3)),i.setAttribute(`aRand`,new Kn(o,1)),i.instanceCount=tl,this.rainMat=new Er({uniforms:{uCamPos:Q.uCamPos,uCamVel:{value:new W},uRainVel:{value:this.rainVel},uRainTime:{value:0},uBox:{value:nl},uRainColor:{value:new W},...r},vertexShader:al,fragmentShader:ol,transparent:!0,blending:2,depthTest:!1,depthWrite:!1}),this.rain=new Hn(i,this.rainMat),this.rain.frustumCulled=!1,t.add(this.rain);let s=new vn;this.bPos=new Float32Array(rl*12),this.bOther=new Float32Array(rl*12),this.bSide=new Float32Array(rl*4),this.bU=new Float32Array(rl*4),this.bBright=new Float32Array(rl*4);let c=new Uint16Array(rl*6);for(let e=0;e<rl;e++){let t=e*4;c.set([t,t+1,t+2,t+2,t+1,t+3],e*6),this.bSide.set([1,-1,-1,1],t),this.bU.set([1,-1,1,-1],t)}s.setAttribute(`position`,new rn(this.bPos,3).setUsage(N)),s.setAttribute(`aOther`,new rn(this.bOther,3).setUsage(N)),s.setAttribute(`aSide`,new rn(this.bSide,1)),s.setAttribute(`aU`,new rn(this.bU,1)),s.setAttribute(`aBright`,new rn(this.bBright,1).setUsage(N)),s.setIndex(new rn(c,1)),s.setDrawRange(0,0),this.boltMat=new Er({uniforms:{uI:{value:0},uBoltColor:{value:new W(10,11.5,16)},...r},vertexShader:sl,fragmentShader:cl,transparent:!0,blending:2,depthTest:!1,depthWrite:!1,side:2}),this.bolt=new Hn(s,this.boltMat),this.bolt.frustumCulled=!1,this.bolt.visible=!1,t.add(this.bolt)}setDepth(e,t,n){this.depthU.tDepth.value=e,this.depthU.uRes.value.set(t,n)}_buildBolt(e,t){let n=this.rng,r=0,i=(e,t,n)=>{if(r>=rl)return;let i=r*4;for(let n=0;n<2;n++)this.bPos.set([e.x,e.y,e.z],(i+n)*3),this.bOther.set([t.x,t.y,t.z],(i+n)*3),this.bPos.set([t.x,t.y,t.z],(i+2+n)*3),this.bOther.set([e.x,e.y,e.z],(i+2+n)*3);this.bBright.fill(n,i,i+4),r++},a=(e,t,r,o,s)=>{if(o===0)return i(e,t,s);let c=e.clone().add(t).multiplyScalar(.5);if(c.x+=(n()-.5)*r,c.y+=(n()-.5)*r*.4,c.z+=(n()-.5)*r,a(e,c,r*.52,o-1,s),a(c,t,r*.52,o-1,s),o>2&&s>.25&&n()<.42){let i=e.distanceTo(t)*(.5+n()*.4),l=new W(n()-.5,-(.25+n()*.6),n()-.5).normalize();a(c,c.clone().addScaledVector(l,i),r*.5,o-2,s*.45)}};a(e,t,e.distanceTo(t)*.2,6,1);let o=this.bolt.geometry;o.attributes.position.needsUpdate=!0,o.attributes.aOther.needsUpdate=!0,o.attributes.aBright.needsUpdate=!0,o.setDrawRange(0,r*6)}strike(e,t=!1){let n=this.rng,r=e.getWorldDirection(new W),i=Math.atan2(r.x,r.z),a=!t&&n()<.3,o=null;for(let t=0;t<5;t++){let t=i+(n()-.5)*1.3,r=700+n()*2300,a=Math.min(3900,Math.max(-3900,e.position.x+Math.sin(t)*r)),s=Math.min(3900,Math.max(-3900,e.position.z+Math.cos(t)*r)),c=this.terrain.sample(a,s);(!o||c>o.h)&&(o={x:a,z:s,h:c})}let s=Q.uFlashPos.value;if(a)s.set(o.x,1e3,o.z),this.flashScale=.45,this.boltOn=!1;else{let e=new W(o.x,Math.max(o.h,0),o.z),t=new W(o.x+(n()-.5)*500,980,o.z+(n()-.5)*500);this._buildBolt(t,e),s.copy(t).lerp(e,.55),this.flashScale=1.25,this.boltOn=!0}this.pulses=[{t:0,a:1,tau:.06}];let c=0,l=1+Math.floor(n()*4);for(let e=0;e<l;e++)c+=.05+n()*.11,this.pulses.push({t:c,a:.3+n()*.6,tau:.04+n()*.06});this.flashT=0,this.flashing=!0,this.audio?.thunder(e.position.distanceTo(s),this.flashScale)}update(e,t,n){let r=this.params;Q.uRain.value=r.rain,Q.uMist.value=r.mist,this.windAngle+=e*.02;let i=3+20*r.wind;Q.uWind.value.set(Math.cos(this.windAngle)*i,Math.sin(this.windAngle)*i),this.rainVel.set(Q.uWind.value.x*.9,-42,Q.uWind.value.y*.9),this.rainTime=(this.rainTime+e)%600,r.lightning>.01&&(this.nextStrike-=e,this.nextStrike<=0&&(this.strike(t),this.nextStrike=(16-12.5*r.lightning)*(.4+1.2*this.rng())));let a=0;if(this.flashing){this.flashT+=e;for(let e of this.pulses)this.flashT>=e.t&&(a+=e.a*Math.exp(-(this.flashT-e.t)/e.tau));this.flashT>1.5&&(this.flashing=!1)}Q.uFlash.value=a*this.flashScale,this.bolt.visible=this.boltOn&&a>.02,this.boltMat.uniforms.uI.value=Math.min(a,1.4),this.rain.visible=r.rain>.01,this.rain.geometry.instanceCount=Math.floor(tl*Math.min(1,r.rain));let o=this.rainMat.uniforms;o.uCamVel.value.copy(n),o.uRainTime.value=this.rainTime;let s=Q.uFogAmbient.value,c=Q.uFlashColor.value,l=Q.uFlash.value;o.uRainColor.value.set(s.x*.45+c.x*l*.16,s.y*.45+c.y*l*.16,s.z*.45+c.z*l*.16),this.audio?.set(r.rain,r.wind)}},ul=class{constructor(){this.ctx=null,this.muted=!1}start(){if(this.ctx){this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e,n=t.sampleRate,r=t.createBuffer(1,n*4,n),i=r.getChannelData(0);for(let e=0;e<i.length;e++)i[e]=Math.random()*2-1;let a=t.createBuffer(1,n*8,n),o=a.getChannelData(0),s=0;for(let e=0;e<o.length;e++)s=(s+.02*(Math.random()*2-1))/1.02,o[e]=s*3.5;this.white=r,this.brown=a,this.master=t.createGain(),this.master.gain.value=0,this.master.connect(t.destination),this.master.gain.linearRampToValueAtTime(this.muted?0:.8,t.currentTime+2.5);let c=e=>{let n=t.createBufferSource();return n.buffer=e,n.loop=!0,n.start(0,Math.random()*e.duration),n},l=(e,n,r=.7)=>{let i=t.createBiquadFilter();return i.type=e,i.frequency.value=n,i.Q.value=r,i};this.rainHi=t.createGain(),c(r).connect(l(`highpass`,2200)).connect(l(`lowpass`,9e3)).connect(this.rainHi).connect(this.master),this.rainLo=t.createGain(),c(r).connect(l(`bandpass`,650,.5)).connect(this.rainLo).connect(this.master),this.windGain=t.createGain();let u=l(`bandpass`,280,.9);c(a).connect(u).connect(this.windGain).connect(this.master);let d=t.createOscillator();d.frequency.value=.09;let f=t.createGain();f.gain.value=140,d.connect(f).connect(u.frequency),d.start(),this.engineGain=t.createGain(),this.engineGain.gain.value=0,this.engineFilter=l(`lowpass`,420,1.2),this.engineOsc=[1,1.503].map(e=>{let n=t.createOscillator();return n.type=`sawtooth`,n.frequency.value=62*e,n.connect(this.engineFilter),n.start(),{o:n,ratio:e}}),this.engineFilter.connect(this.engineGain).connect(this.master),this.set(.85,.45)}setEngine(e,t=0,n=0){if(!this.ctx)return;let r=this.ctx.currentTime;this.engineGain.gain.setTargetAtTime(e?.1+.07*t:0,r,.25);let i=48+30*t+26*n;for(let{o:e,ratio:t}of this.engineOsc)e.frequency.setTargetAtTime(i*t,r,.2);this.engineFilter.frequency.setTargetAtTime(300+500*t,r,.3)}set(e,t){if(!this.ctx)return;let n=this.ctx.currentTime;this.rainHi.gain.setTargetAtTime(.09*e,n,.3),this.rainLo.gain.setTargetAtTime(.16*e,n,.3),this.windGain.gain.setTargetAtTime(.25+.9*t,n,.3)}setMuted(e){this.muted=e,this.ctx&&this.master.gain.setTargetAtTime(e?0:.8,this.ctx.currentTime,.2)}thunder(e,t=1){let n=this.ctx;if(!n)return;let r=Math.min(e/343,4.5),i=n.currentTime+r,a=1/(1+e/900),o=t*(.35+1.1*a),s=4+Math.random()*3.5,c=n.createBufferSource();c.buffer=this.brown,c.loop=!0;let l=n.createBiquadFilter();l.type=`lowpass`,l.frequency.setValueAtTime(500+900*a,i),l.frequency.exponentialRampToValueAtTime(70,i+s);let u=n.createGain(),d=new Float32Array(24);for(let e=0;e<24;e++){let t=e/23;d[e]=o*(1-t)**1.6*(.55+.45*Math.random())*(e===0?.2:1)}if(d[23]=0,u.gain.setValueAtTime(0,n.currentTime),u.gain.setValueCurveAtTime(d,i,s),c.connect(l).connect(u).connect(this.master),c.start(i,Math.random()*6),c.stop(i+s+.2),a>.4){let e=n.createBufferSource();e.buffer=this.white;let r=n.createBiquadFilter();r.type=`highpass`,r.frequency.value=900;let o=n.createGain();o.gain.setValueAtTime(0,n.currentTime),o.gain.setValueAtTime(.5*a*t,i),o.gain.exponentialRampToValueAtTime(.001,i+.4),e.connect(r).connect(o).connect(this.master),e.start(i,Math.random()*3),e.stop(i+.5)}}},dl=new W,fl=new W,pl=new Ke(0,0,0,`YXZ`),ml=class{constructor(e,t,n){this.camera=e,this.terrain=t,this.mode=`cine`,this.theta=-Math.PI/2,this.cineSpeed=40,this.freeSpeed=50,this.pos=new W,this.look=new W,this.vel=new W,this.move=new W,this.prev=new W,this.roll=0,this.prevHeading=null,this.yaw=0,this.pitch=0,this.keys={},this.snap=!0,this.onMode=()=>{},this.enabled=!0,this.touch=null;let r=null,i=0,a=0;n.addEventListener(`pointerdown`,e=>{if(r===null){r=e.pointerId,i=e.clientX,a=e.clientY;try{n.setPointerCapture(e.pointerId)}catch{}}});let o=e=>{e.pointerId===r&&(r=null)};n.addEventListener(`pointerup`,o),n.addEventListener(`pointercancel`,o),n.addEventListener(`pointermove`,e=>{if(e.pointerId!==r)return;let t=e.clientX-i,n=e.clientY-a;i=e.clientX,a=e.clientY,this.enabled&&(t||n)&&(this.setMode(`free`),this.yaw-=t*.0028,this.pitch=Math.min(1.45,Math.max(-1.45,this.pitch-n*.0028)))}),n.addEventListener(`wheel`,e=>{this.freeSpeed=Math.min(400,Math.max(8,this.freeSpeed*(e.deltaY<0?1.2:1/1.2)))},{passive:!0});let s=[`KeyW`,`KeyA`,`KeyS`,`KeyD`,`KeyQ`,`KeyE`,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`];window.addEventListener(`keydown`,e=>{e.target instanceof HTMLInputElement||(this.keys[e.code]=!0,this.enabled&&s.includes(e.code)&&this.setMode(`free`))}),window.addEventListener(`keyup`,e=>this.keys[e.code]=!1),window.addEventListener(`blur`,()=>this.keys={})}setMode(e){if(e===this.mode)return;let t=this.camera;e===`free`?(pl.setFromQuaternion(t.quaternion,`YXZ`),this.yaw=pl.y,this.pitch=pl.x,this.vel.set(0,0,0)):(this.theta=Math.atan2(t.position.z,t.position.x),this._point(this.theta,dl),this.pos.copy(t.position),t.getWorldDirection(this.look).multiplyScalar(200).add(t.position),this.snap=dl.distanceTo(t.position)>400,this.prevHeading=null),this.mode=e,this.onMode(e)}_point(e,t){let n=Tc(e)+28*Math.sin(e*7+1);return t.set(Math.cos(e)*n,100+48*Math.sin(e*4.3+.5)+14*Math.sin(e*11),Math.sin(e)*n),t}update(e){let t=this.camera;this.enabled&&this.touch&&(this.touch.x||this.touch.y)&&this.setMode(`free`),this.prev.copy(t.position),this.mode===`cine`?this._cine(e):this._free(e),e>0&&this.vel.copy(t.position).sub(this.prev).divideScalar(e)}_cine(e){let t=this.camera;if(this.theta+=this.cineSpeed*e/Tc(this.theta),this._point(this.theta,dl),this._point(this.theta+.09,fl),fl.y=Math.max(fl.y-20,10),this.snap)this.pos.copy(dl),this.look.copy(fl),this.snap=!1;else{let t=1-Math.exp(-e*1.5);this.pos.lerp(dl,t),this.look.lerp(fl,t)}t.position.copy(this.pos),t.lookAt(this.look);let n=Math.atan2(-(this.look.x-this.pos.x),-(this.look.z-this.pos.z));if(this.prevHeading!==null&&e>0){let t=n-this.prevHeading;t=Math.atan2(Math.sin(t),Math.cos(t));let r=Math.min(.3,Math.max(-.3,t/e*1.6));this.roll+=(r-this.roll)*(1-Math.exp(-e*1.2))}this.prevHeading=n,t.rotateZ(this.roll)}_free(e){let t=this.camera,n=this.keys,r=this.touch,i=(n.KeyW||n.ArrowUp?1:0)-(n.KeyS||n.ArrowDown?1:0)-(r?r.y:0),a=(n.KeyD||n.ArrowRight?1:0)-(n.KeyA||n.ArrowLeft?1:0)+(r?r.x:0),o=+!!n.KeyE-!!n.KeyQ,s=this.freeSpeed*(n.ShiftLeft||n.ShiftRight?3.5:1),c=Math.cos(this.yaw),l=Math.sin(this.yaw),u=Math.cos(this.pitch),d=Math.sin(this.pitch);dl.set(-l*u*i+c*a,d*i+o,-c*u*i-l*a).multiplyScalar(s),this.move.lerp(dl,1-Math.exp(-e*5));let f=t.position;f.addScaledVector(this.move,e),f.x=Math.min(3950,Math.max(-3950,f.x)),f.z=Math.min(3950,Math.max(-3950,f.z));let p=Math.max(this.terrain.sample(f.x,f.z),0);f.y=Math.min(900,Math.max(p+2.5,f.y)),this.roll*=Math.exp(-e*3),t.rotation.set(this.pitch,this.yaw,this.roll,`YXZ`)}};function hl(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new vn;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=gl(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=gl(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function gl(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new rn(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var _l=`
attribute vec3 aColor;
attribute float aEmit;
varying vec3 vWorldPos;
varying vec3 vNormal;
varying vec3 vColor;
varying float vEmit;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  vNormal = mat3(modelMatrix) * normal;
  vColor = aColor;
  vEmit = aEmit;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,vl=`
varying vec3 vWorldPos;
varying vec3 vNormal;
varying vec3 vColor;
varying float vEmit;
${bc}
void main() {
  vec3 wp = vWorldPos;
  vec3 N = normalize(vNormal);
  if (!gl_FrontFacing) N = -N;

  float grain = texture(uNoiseTex, wp.xz * 0.21 + wp.y * 0.13).r;
  vec3 albedo = vColor * (0.8 + 0.4 * grain);

  float hs = terrainHS(wp.xz).g;
  float sh = smoothstep(-9.0, -1.0, wp.y - hs);
  vec3 moonFlat = normalize(vec3(uMoonDir.x, 0.0, uMoonDir.z));
  float skyK = (0.45 + 0.55 * N.y) * (0.8 + 0.6 * max(dot(N, moonFlat), 0.0));
  vec3 light = uAmbient * skyK + uFogAmbient * 0.3;
  light += uMoonColor * max(dot(N, uMoonDir), 0.0) * sh;

  vec3 toF = uFlashPos - wp;
  float df = length(toF);
  vec3 Lf = toF / df;
  float att = 1.0 / (1.0 + (df * df) / (1500.0 * 1500.0));
  light += uFlashColor * uFlash * (max(dot(N, Lf), 0.0) * 0.85 + 0.15) * att;
  light += lampLight(wp, N) * 1.6;
  light += beamLight(wp, N);

  vec3 col = albedo * light;

  // rain-wet roofs, steel and stone catch the moon
  vec3 V = normalize(uCamPos - wp);
  float gloss = (0.25 + 0.5 * uRain) * smoothstep(0.1, 0.5, N.y);
  col += uMoonColor * pow(max(dot(N, normalize(uMoonDir + V)), 0.0), 40.0) * gloss * sh * 0.6;
  col += uFlashColor * uFlash * att * pow(max(dot(N, normalize(Lf + V)), 0.0), 40.0) * gloss * 0.6;

  // lit windows and lamps, with a little flicker
  float flick = 0.9 + 0.1 * sin(uTime * 7.0 + wp.x * 3.1 + wp.z * 1.7);
  col += vColor * vEmit * flick;
  gl_FragColor = vec4(col, 1.0);
}
`,yl=null;function bl(){return yl||=new Er({uniforms:{...Q},vertexShader:_l,fragmentShader:vl,side:2}),yl}var xl=new W(0,1,0),Sl=class{constructor(){this.parts=[]}add(e,t,n=0){let r=e.index?e.toNonIndexed():e;r.attributes.uv&&r.deleteAttribute(`uv`);let i=r.attributes.position.count,a=new Float32Array(i*3),o=new Float32Array(i);for(let e=0;e<i;e++)a.set(t,e*3),o[e]=n;return r.setAttribute(`aColor`,new rn(a,3)),r.setAttribute(`aEmit`,new rn(o,1)),this.parts.push(r),this}box(e,t,n,r,i,a,o,s=0){let c=new ur(e,t,n);return c.translate(r,i+t/2,a),this.add(c,o,s)}bar(e,t,n,r,i,a,o,s,c=0){let l=new W(e,t,n),u=new W(r,i,a),d=new ur(o,l.distanceTo(u),o);return d.applyQuaternion(new ge().setFromUnitVectors(xl,u.clone().sub(l).normalize())),d.translate((e+r)/2,(t+i)/2,(n+a)/2),this.add(d,s,c)}mesh(){let e=new Hn(hl(this.parts),bl());return this.parts=[],e}},Cl=[.3,.3,.28],wl=[.26,.06,.045],Tl=[.13,.035,.03],El=[.06,.07,.078],Dl=[.33,.31,.28],Ol=[.02,.015,.012],kl=[1,.52,.18],Al=1.5,jl=(e,t,n)=>e+(t-e)*n;function Ml(e,t,n,r,i){let a=[[-1,-1],[1,-1],[1,1],[-1,1]],o=[];for(let s=0;s<=7;s++){let c=s/7,l=jl(e/2,Math.max(i/2,.01),c),u=jl(t/2,.01,c),d=n*c**1.6;for(let e=0;e<4;e++){let t=a[e],n=a[(e+1)%4];for(let e=0;e<8;e++){let i=e/8,a=Math.abs(2*i-1)**3;o.push(jl(t[0],n[0],i)*l,d+r*a*(1-c)*(1-c),jl(t[1],n[1],i)*u)}}}let s=[];for(let e=0;e<7;e++)for(let t=0;t<32;t++){let n=e*32+t,r=e*32+(t+1)%32,i=n+32,a=r+32;s.push(n,i,r,r,i,a)}let c=new vn;return c.setAttribute(`position`,new Y(o,3)),c.setIndex(s),c.computeVertexNormals(),c}function Nl(e){let t=new Sl,n=(...e)=>t.box(...e),r=(e,n,r,i,a,o,s,c)=>{let l=Ml(e,n,r,i,a);l.translate(o,s,c),t.add(l,El)};n(66,6,48,0,-5,0,Cl);for(let e=0;e<6;e++)n(12,4,1.4,0,-3.5-e*.5,24.7+e*1.4,Cl);let i=(e,t,r,i)=>{n(e,4.2,t,r,1,i,Dl),n(e+.8,.5,t+.8,r,5.2,i,El)};i(64,1.2,0,-23),i(1.2,46,-32,0),i(1.2,46,32,0),i(25,1.2,-19.5,23),i(25,1.2,19.5,23),n(12,5.5,5,0,1,23,wl),n(4.4,4.2,5.3,0,1,23,Ol),r(19,11,3.2,1.5,9,0,6.5,23);for(let e of[-1,1])n(.3,2.6,.3,e*3.4,1,26.2,Ol),n(.8,1.1,.8,e*3.4,3.6,26.2,kl,Al*1.6),n(.5,2.6,.5,e*8,1,12,Cl),n(.8,.9,.8,e*8,3.6,12,kl,Al*1.6);n(32,1.4,20,0,1,-7,Cl),n(27,6.6,14,0,2.4,-7,wl);for(let e=0;e<6;e++)n(.8,6.6,.8,-12.5+e*5,2.4,.9000000000000004,Tl);for(let e=0;e<5;e++)n(3.2,3.6,.2,-10+e*5,3.9,.04999999999999982,kl,Al);for(let e of[-1,1])for(let t of[-3.5,3.5])n(.2,3,3,e*13.55,4.1,-7+t,kl,Al*.8);for(let e=0;e<3;e++)n(3,2.6,.2,-8+e*8,4.4,-14.05,kl,Al*.7);r(38,25,5.5,2.4,15,0,9,-7),n(17,5,8.5,0,11,-7,wl);for(let e=0;e<3;e++)n(2.6,2.2,.2,-5+e*5,13.3,-2.7,kl,Al);for(let e of[-1,1])n(.2,2.2,2.6,e*8.55,13.3,-7,kl,Al*.8);r(26,16.5,6.2,2.2,10,0,16,-7),n(10.6,.7,.6,0,22,-7,El);for(let e of[-1,1])n(.7,1.6,.7,e*5.3,21.8,-7,El);n(11,1.2,11,-21,1,8,Cl);let a=2.2;for(let e of[8.2,7.2,6.3,5.4,4.6])n(e,4,e,-21,a,8,wl),n(1.4,1.8,.2,-21,a+1.3,8+e/2+.03,kl,Al),n(1.4,1.8,.2,-21,a+1.3,8-e/2-.03,kl,Al),n(.2,1.8,1.4,-21+e/2+.03,a+1.3,8,kl,Al),n(.2,1.8,1.4,-21-e/2-.03,a+1.3,8,kl,Al),r(e+5,e+5,2,1.3,0,-21,a+4,8),a+=4.9;n(.45,5,.45,-21,a+.9,8,El),n(15,1,11.5,21,1,7,Cl),n(12.5,4.6,9,21,2,7,wl);for(let e of[-3,3])n(2.6,2.6,.2,21+e,3.2,11.55,kl,Al);n(.2,2.6,2.6,14.7,3.2,7,kl,Al),r(18.5,14.5,4.2,1.7,6.5,21,6.6,7);let o=t.mesh();return o.position.set(e.x,e.y,e.z),o.rotation.y=Math.atan2(e.dirX,e.dirZ),o.updateMatrixWorld(!0),Q.uTemplePos.value.copy(o.localToWorld(new W(0,6,10))),o}function Pl(e){let t=[],n=[],r=[];e({tri(e,i,a,o,s,c,l){t.push(...e,...i,...a),n.push(...o,...s,...c),r.push(l,l,l)}});let i=new vn;return i.setAttribute(`position`,new Y(t,3)),i.setAttribute(`normal`,new Y(n,3)),i.setAttribute(`aLeaf`,new Y(r,1)),i}function Fl(e,t,n,r,i,a,o){let s=n-t;for(let c=0;c<i;c++){let l=a+c/i*Math.PI*2,u=a+(c+1)/i*Math.PI*2,d=(l+u)/2;e.tri([Math.cos(l)*r,t,Math.sin(l)*r],[0,n,0],[Math.cos(u)*r,t,Math.sin(u)*r],[Math.cos(l)*s,r,Math.sin(l)*s],[Math.cos(d)*s,r,Math.sin(d)*s],[Math.cos(u)*s,r,Math.sin(u)*s],o)}}function Il(e,t,n){for(let r=0;r<3;r++){let i=r/3*Math.PI*2,a=(r+1)/3*Math.PI*2,o=[Math.cos(i)*n,0,Math.sin(i)*n],s=[Math.cos(a)*n,0,Math.sin(a)*n],c=[o[0]*.6,t,o[2]*.6],l=[s[0]*.6,t,s[2]*.6],u=[Math.cos(i),0,Math.sin(i)],d=[Math.cos(a),0,Math.sin(a)];e.tri(o,c,s,u,u,d,0),e.tri(s,c,l,d,u,d,0)}}function Ll(){return Pl(e=>{Il(e,.5,.07),Fl(e,.16,.56,1,6,0,1),Fl(e,.4,.8,.74,6,.5,1),Fl(e,.64,1,.46,6,1,1)})}function Rl(){let e=new hr(1,0).attributes.position,t=[[0,.62,0,1,.38,1],[.38,.5,.22,.68,.27,.68],[-.32,.74,-.26,.6,.25,.6]];return Pl(n=>{Il(n,.5,.09);for(let[r,i,a,o,s,c]of t){let t=t=>{let n=e.getX(t),l=e.getY(t),u=e.getZ(t);return{p:[r+n*o,i+l*s,a+u*c],n:[n/o,l/s,u/c]}};for(let r=0;r<e.count;r+=3){let e=t(r),i=t(r+1),a=t(r+2);n.tri(e.p,i.p,a.p,e.n,i.n,a.n,1)}}})}var zl=`
attribute vec3 aPos;
attribute vec2 aSize;   // crown radius, height
attribute float aRot;
attribute float aTint;
attribute float aLeaf;
uniform float uTime;
uniform vec2 uWind;
varying vec3 vWorldPos;
varying vec3 vNormal;
varying float vLeaf;
varying float vTint;
varying float vH;
void main() {
  float c = cos(aRot), s = sin(aRot);
  vec3 p = position;
  vec3 q = vec3((p.x * c - p.z * s) * aSize.x, p.y * aSize.y, (p.x * s + p.z * c) * aSize.x);
  vec3 n = vec3(normal.x * c - normal.z * s, normal.y, normal.x * s + normal.z * c);
  vNormal = normalize(vec3(n.x / aSize.x, n.y / aSize.y, n.z / aSize.x));

  // Wind: gusts roll down the valley as fronts. Each tree leans as a front passes,
  // limber trees far more than stiff ones, and the crowns shake while it blows.
  float wl = length(uWind);
  vec2 wd = uWind / max(wl, 1e-3);
  vec2 wc = vec2(-wd.y, wd.x);
  float along = dot(aPos.xz, wd), across = dot(aPos.xz, wc);
  float g1 = sin(along * 0.011 - uTime * 0.75 + 2.0 * sin(across * 0.006 + uTime * 0.11));
  float g2 = sin(along * 0.027 - uTime * 1.6 + across * 0.013);
  float gust = smoothstep(0.05, 1.0, g1 * 0.65 + g2 * 0.35);
  float limber = fract(aRot * 7.31);
  float flex = 0.3 + 1.5 * limber * limber;
  float lean = min(wl * 0.012, 0.32) * (0.22 + 1.05 * gust) * flex;
  float ph = aRot * 5.0 + aPos.x * 0.07 + aPos.z * 0.05;
  float bend = p.y * p.y * aSize.y;
  // whipping back and forth on top of the steady lean
  float whip = sin(uTime * (2.1 + limber) + ph) * 0.28 + sin(uTime * 4.3 + ph * 1.7) * 0.1;
  q.xz += wd * (lean * (1.0 + whip) * bend) + wc * (lean * 0.35 * sin(uTime * 1.7 + ph * 2.3) * bend);
  q.y -= lean * lean * 0.6 * bend;
  // foliage thrashes
  float fl = aLeaf * wl * 0.012 * (0.3 + gust) * flex;
  q += vec3(sin(uTime * 7.0 + p.x * 9.0 + ph), sin(uTime * 8.3 + p.z * 11.0 + ph) * 0.5, sin(uTime * 6.1 + p.y * 13.0 + ph)) * fl;

  vec3 wp = aPos + q;
  vWorldPos = wp;
  vLeaf = aLeaf;
  vTint = aTint;
  vH = p.y;
  gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
}
`,Bl=`
varying vec3 vWorldPos;
varying vec3 vNormal;
varying float vLeaf;
varying float vTint;
varying float vH;
uniform vec3 uLeafA;
uniform vec3 uLeafB;
${bc}
void main() {
  vec3 wp = vWorldPos;
  vec3 N = normalize(vNormal);
  if (!gl_FrontFacing) N = -N;

  vec3 leaf = mix(uLeafA, uLeafB, vTint) * (0.45 + 0.75 * vH);
  vec3 albedo = mix(vec3(0.035, 0.028, 0.022), leaf, vLeaf);

  float hs = terrainHS(wp.xz).g;
  float sh = smoothstep(-9.0, -1.0, wp.y - hs);
  vec3 moonFlat = normalize(vec3(uMoonDir.x, 0.0, uMoonDir.z));
  float skyK = (0.5 + 0.5 * N.y) * (0.8 + 0.6 * max(dot(N, moonFlat), 0.0));
  vec3 light = (uAmbient * skyK + uFogAmbient * 0.3) * (0.4 + 0.6 * vH);
  // foliage lets some light through, so the moon wraps around the crown
  light += uMoonColor * (max(dot(N, uMoonDir), 0.0) * 0.8 + 0.2) * sh;

  vec3 toF = uFlashPos - wp;
  float df = length(toF);
  float att = 1.0 / (1.0 + (df * df) / (1500.0 * 1500.0));
  light += uFlashColor * uFlash * (max(dot(N, toF / df), 0.0) * 0.8 + 0.2) * att;
  light += lampLight(wp, N) * 2.0;
  light += beamLight(wp, N);

  gl_FragColor = vec4(albedo * light, 1.0);
}
`,Vl=[{name:`pine`,geometry:Ll,leafA:[.008,.02,.014],leafB:[.02,.042,.024]},{name:`leaf`,geometry:Rl,leafA:[.012,.03,.012],leafB:[.034,.06,.022]}];function Hl(e,{spacing:t=10,reach:n=1250,drawDistance:r=2700,clearings:i=[],keepClear:a=null}={}){let o=dc(4242),s=new gc(77),c=sc/2,l=sc/16,u=e.site,d=new Map,f=(e,t,n,r,i,a,o,s)=>{let c=d.get(e);c||d.set(e,c={pos:[],size:[],rot:[],tint:[],minY:1e9,maxY:-1e9}),c.pos.push(t,n,r),c.size.push(i,a),c.rot.push(o),c.tint.push(s),c.minY=Math.min(c.minY,n),c.maxY=Math.max(c.maxY,n+a)},p=0,m=c-40;for(let r=-m;r<m;r+=t)for(let d=-m;d<m;d+=t){let m=d+o()*t,h=r+o()*t,g=o(),_=o(),v=o(),y=o(),b=kc(m,h);if(b>n||g>1-.85*Math.min(1,Math.max(0,(b-450)/(n-450))))continue;let x=e.sample(m,h);if(x<4.5||e.flatness(m,h)<.82)continue;let S=s.noise2(m*.006,h*.006);if(S<-.42)continue;let C=!1;if(u){let e=Math.hypot(m-u.x,h-u.z);if(e<50)continue;C=e<130}if(i.some(e=>Math.hypot(m-e.x,h-e.z)<e.r)||a&&a(m,h))continue;let w=s.noise2(m*.0035+50,h*.0035-20)+(C?.5:0)+(x>320?.25:0)+(_-.5)*.5>.12?0:1,T=.75+.5*v+.15*S,E=w===0?17*T:12.5*T,D=w===0?3.3*T*(.85+.3*y):5.4*T*(.85+.3*y),O=Math.floor((m+c)/l);f(`${Math.floor((h+c)/l)*16+O}:${w}`,m,x-.4,h,D,E,y*6.283,_),p++}let h=new ut,g=[],_=Vl.map(e=>e.geometry()),v=Vl.map(e=>new Er({uniforms:{...Q,uLeafA:{value:new W(...e.leafA)},uLeafB:{value:new W(...e.leafB)}},vertexShader:zl,fragmentShader:Bl,side:2}));for(let[e,t]of d){let[n,r]=e.split(`:`).map(Number),i=n%16,a=Math.floor(n/16),o=new ai;o.setAttribute(`position`,_[r].attributes.position),o.setAttribute(`normal`,_[r].attributes.normal),o.setAttribute(`aLeaf`,_[r].attributes.aLeaf),o.setAttribute(`aPos`,new Kn(new Float32Array(t.pos),3)),o.setAttribute(`aSize`,new Kn(new Float32Array(t.size),2)),o.setAttribute(`aRot`,new Kn(new Float32Array(t.rot),1)),o.setAttribute(`aTint`,new Kn(new Float32Array(t.tint),1)),o.instanceCount=t.rot.length;let s=(t.minY+t.maxY)/2;o.boundingSphere=new un(new W(-c+(i+.5)*l,s,-c+(a+.5)*l),Math.hypot(l*.72,(t.maxY-t.minY)/2)+12);let u=new Hn(o,v[r]);u.matrixAutoUpdate=!1,h.add(u),g.push(u)}return{group:h,count:p,drawDistance:r,update(e){for(let t of g){let n=t.geometry.boundingSphere;t.visible=n.center.distanceTo(e.position)-n.radius<this.drawDistance}}}}var Ul=1800,Wl=9.8,Gl=2,Kl=`
attribute vec2 aQuad; // x = side -1..1, y = 0 at the tail .. 1 at the head
attribute vec3 aA;
attribute vec3 aB;
attribute vec4 aCol;  // rgb, half width in metres
uniform vec3 uCamPos;
varying vec3 vCol;
varying vec2 vQ;
void main() {
  vec3 d = aB - aA;
  if (dot(d, d) < 1e-6) d = vec3(0.0, 0.001, 0.0);
  vec3 P = mix(aA, aB, aQuad.y);
  vec3 toCam = uCamPos - P;
  float dist = length(toCam);
  // never thinner than about a pixel; spread the same light over the wider streak
  float w = max(aCol.w, dist * 0.0016);
  vec3 c = cross(d, toCam);
  if (dot(c, c) < 1e-8) c = cross(vec3(0.0, 1.0, 0.0), toCam);
  P += normalize(c) * aQuad.x * w + normalize(d) * (aQuad.y * 2.0 - 1.0) * w;
  vCol = aCol.rgb * (aCol.w / w) * exp(-dist * 0.0005);
  vQ = aQuad;
  gl_Position = projectionMatrix * viewMatrix * vec4(P, 1.0);
}
`,ql=`
uniform sampler2D tDepth;
uniform vec2 uRes;
varying vec3 vCol;
varying vec2 vQ;
void main() {
  if (gl_FragCoord.z > texture(tDepth, gl_FragCoord.xy / uRes).x) discard;
  float s = 1.0 - abs(vQ.x);
  gl_FragColor = vec4(vCol * s * s * (0.3 + 0.7 * vQ.y), 1.0);
}
`,Jl={round:0,spark:1,splash:2,flash:3},Yl=[[10,3.6,.9,.24],[6,4,1.6,.07],[.7,.78,.85,.32],[10,6.5,2.4,.6]];function Xl(e,t,n,r){let i=[];for(let e=0;e<Ul;e++)i.push({live:!1,kind:0,p:new W,v:new W,a:new W,age:0,life:0,len:0});let a=0,o=()=>{for(let e=0;e<Ul;e++){let t=i[(a+e)%Ul];if(!t.live)return a=(a+e+1)%Ul,t}return null},s=new ai;s.setAttribute(`position`,new Y(new Float32Array(12),3)),s.setAttribute(`aQuad`,new Y([-1,0,1,0,-1,1,1,1],2)),s.setIndex([0,1,2,1,3,2]);let c=new Kn(new Float32Array(Ul*3),3).setUsage(N),l=new Kn(new Float32Array(Ul*3),3).setUsage(N),u=new Kn(new Float32Array(Ul*4),4).setUsage(N);s.setAttribute(`aA`,c),s.setAttribute(`aB`,l),s.setAttribute(`aCol`,u),s.instanceCount=0;let d=new Hn(s,new Er({uniforms:{uCamPos:Q.uCamPos,...n},vertexShader:Kl,fragmentShader:ql,transparent:!0,blending:2,depthTest:!1,depthWrite:!1}));d.frustumCulled=!1,d.renderOrder=5,t.add(d);let f=new W,p=new W;function m(e,t,n,r,i){for(let a=0;a<t;a++){let t=o();if(!t)return;t.live=!0,t.kind=n,t.p.copy(e),t.a.copy(e),t.v.set(Math.random()-.5,Math.random()*i,Math.random()-.5).normalize().multiplyScalar(r*(.4+.6*Math.random())),t.age=0,t.life=n===Jl.splash?.5+.4*Math.random():.15+.2*Math.random()}}let h=0;function g(e){let t=r&&r.ctx;if(!t||!r.white||h>0)return;h=.07;let n=1/(1+e/250),i=t.currentTime+Math.min(e/343,2.5),a=t.createBufferSource();a.buffer=r.white;let o=t.createBiquadFilter();o.type=`bandpass`,o.frequency.value=500+1600*n,o.Q.value=.8;let s=t.createGain();s.gain.setValueAtTime(0,t.currentTime),s.gain.setValueAtTime(.9*n+.04,i),s.gain.exponentialRampToValueAtTime(.001,i+.06+.1*(1-n)),a.connect(o).connect(s).connect(r.master),a.start(i,Math.random()*3),a.stop(i+.25)}return{fire(e,t,n){let r=o();r&&(r.live=!0,r.kind=Jl.round,r.p.copy(e),r.a.copy(e),r.v.copy(t).multiplyScalar(760),r.age=0,r.life=Gl);let i=o();i&&(i.live=!0,i.kind=Jl.flash,i.p.copy(e).addScaledVector(t,2.6),i.a.copy(e),i.v.set(0,0,0),i.age=0,i.life=.04),g(n)},update(t,n,r){h-=t;let a=0,o=0,d=c.array,g=l.array,_=u.array;for(let s of i){if(!s.live)continue;if(s.age+=t,s.age>s.life){s.live=!1;continue}if(s.kind===Jl.round){if(p.copy(s.p),s.p.addScaledVector(s.v,t),s.v.y-=Wl*t,n){f.copy(s.p).sub(p);let e=f.lengthSq(),t=e>0?Math.min(1,Math.max(0,f.dot(p.clone().negate().add(n))/e)):0,i=p.x+f.x*t,o=p.y+f.y*t,c=p.z+f.z*t;if((i-n.x)**2+(o-n.y)**2+(c-n.z)**2<r*r){a++,s.live=!1,m(f.set(i,o,c),7,Jl.spark,30,1);continue}}let i=e.sample(s.p.x,s.p.z);if(s.p.y<Math.max(i,0)){s.live=!1,i<.3?m(f.set(s.p.x,.2,s.p.z),5,Jl.splash,9,3):m(s.p,4,Jl.spark,22,1.5);continue}}else s.kind!==Jl.flash&&(p.copy(s.p),s.p.addScaledVector(s.v,t),s.v.y-=Wl*t);let i=Yl[s.kind],c=1;if(s.kind===Jl.round){let e=s.v.length();s.a.copy(s.p).addScaledVector(s.v,-Math.min(18,e*s.age)/e)}else s.kind===Jl.flash?c=1:(s.a.copy(s.p).addScaledVector(s.v,-.04),c=1-s.age/s.life);d[o*3]=s.a.x,d[o*3+1]=s.a.y,d[o*3+2]=s.a.z,g[o*3]=s.p.x,g[o*3+1]=s.p.y,g[o*3+2]=s.p.z,_[o*4]=i[0]*c,_[o*4+1]=i[1]*c,_[o*4+2]=i[2]*c,_[o*4+3]=i[3],o++}return s.instanceCount=o,c.needsUpdate=l.needsUpdate=u.needsUpdate=!0,a},count(){let e=0;for(let t of i)t.live&&e++;return e}}}var Zl=[.2,.2,.19],Ql=[.07,.075,.08],$l=[.09,.1,.06],eu=[.15,.13,.09],tu=[1,.55,.2],nu=[3,.15,.1],ru=[2.6,2.9,3.4],iu=[2.4,2.4,2],au=1500,ou=100,su=new W(0,1,0),cu=950,lu=4,uu=9,du=45,fu=1.5,pu=3.5,mu=.032,hu=.04,gu=.75,_u=9.8,vu=`
varying vec3 vWorld;
varying vec3 vN;
varying float vT;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vN = mat3(modelMatrix) * normal;
  vT = uv.y;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,yu=`
varying vec3 vWorld;
varying vec3 vN;
varying float vT;
uniform vec3 uCamPos;
uniform float uTime;
uniform float uMist;
uniform float uRain;
uniform sampler2D uNoiseTex;
uniform sampler2D tDepth;
uniform vec2 uRes;
void main() {
  if (gl_FragCoord.z > texture(tDepth, gl_FragCoord.xy / uRes).x) discard;
  vec3 toCam = uCamPos - vWorld;
  float dist = length(toCam);
  // brightest where the line of sight passes through the middle of the shaft
  float edge = pow(abs(dot(normalize(vN), toCam / dist)), 2.0);
  float fall = (1.0 - vT) * (1.0 - vT) * smoothstep(0.0, 0.004, vT);
  float n = texture(uNoiseTex, vWorld.xz * 0.003 + vec2(uTime * 0.012, vWorld.y * 0.002)).r;
  float strength = 0.05 + 0.13 * min(uMist, 1.5) + 0.08 * uRain;
  vec3 col = vec3(0.75, 0.86, 1.0) * edge * fall * (0.55 + 0.9 * n) * strength * exp(-dist * 0.00035);
  gl_FragColor = vec4(col, 1.0);
}
`;function bu(e,t,n,r,i,a,o){let s=Tc(t),c=Math.cos(t),l=Math.sin(t),u=null;for(let t=a;t<=o;t+=6){let a=s+n*t,o=c*a,d=l*a,f=e.sample(o,d);if(f<r||f>i)continue;let p=0;for(let t=0;t<8;t++)p=Math.max(p,Math.abs(e.sample(o+Math.cos(t*.785)*9,d+Math.sin(t*.785)*9)-f));let m=p+t*.004;(!u||m<u.score)&&(u={score:m,x:o,y:f,z:d,rough:p})}return u&&u.rough<9?u:null}function xu(e,t,n,r,i){for(let a=0;a<2;a++)for(let o=1;o<9;o++){let s=o/9*Math.PI*2+a*.35,c=new ur(.95,.42,.5);c.rotateY(-(s+Math.PI/2)),c.translate(t+Math.cos(s)*i,n+.21+a*.42,r+Math.sin(s)*i),e.add(c,eu)}}function Su(e){e.box(13,8,13,0,-7.4,0,Zl),e.box(5.5,2.8,4,-3.2,.6,-3.5,$l),e.box(6.1,.3,4.6,-3.2,3.4,-3.5,Ql),e.box(1.3,.9,.15,-3.2,1.9,-1.45,tu,1.4),e.box(.9,1.9,.15,-5,.6,-1.45,[.02,.02,.02]);let t=1.5;for(let[n,r]of[[-1,-1],[1,-1],[1,1],[-1,1]])e.bar(n*t,.6,r*t,n*t*.55,15,r*t*.55,.16,Ql);for(let n=0;n<4;n++){let r=.6+n*14.4/4,i=.6+(n+1)*14.4/4,a=t*(1-n/4*.45),o=t*(1-.45*((n+1)/4)),s=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let t=0;t<4;t++){let n=s[t],c=s[(t+1)%4];e.bar(n[0]*o,i,n[1]*o,c[0]*o,i,c[1]*o,.1,Ql),e.bar(n[0]*a,r,n[1]*a,c[0]*o,i,c[1]*o,.08,Ql)}}for(let[t,n]of[[5,5],[-5.5,4.5]])e.box(.2,3.2,.2,t,.6,n,Ql),e.box(.5,.4,.5,t,3.8,n,tu,2.2);return e.mesh()}function Cu(e){let t=5.5;e.bar(0,0,0,0,1.2,0,.3,Ql);for(let t=0;t<=6;t++){let n=-9/2+t*9/6;e.bar(n,1.2,0,n,6.7,0,.09,Ql)}for(let n=0;n<=4;n++){let r=1.2+n*t/4;e.bar(-9/2,r,0,9/2,r,0,.09,Ql)}for(let n=0;n<6;n++)for(let r=0;r<4;r++){let i=-9/2+(n+.5)*9/6,a=1.2+(r+.5)*t/4;e.bar(i,a,0,i,a,.55,.05,Ql),e.bar(i-.5,a,.55,i+.5,a,.55,.05,Ql)}return e.box(.35,.35,.35,0,6.8,0,nu,1),e.mesh()}var wu=new W(-2.4,1.55,2.2);function Tu(e){e.box(7,8,7,0,-7.5,0,Zl),e.box(1.5,1.1,1.5,0,.5,0,Ql);for(let t of[-1,1])e.box(.18,1.6,.5,t*1.05,1.5,0,Ql);return e.box(2.6,1.9,1.8,2,.5,-2.2,$l),e.box(.7,.5,.12,2,1.5,-1.27,tu,1.2),xu(e,wu.x,.5,wu.z,1.25),e.box(.16,1,.16,wu.x,.5,wu.z,Ql),e.mesh()}function Eu(e){let t=new fr(.85,.75,1.2,14);t.translate(0,.2,0),e.add(t,Ql);let n=new fr(.74,.74,.06,14);return n.translate(0,.82,0),e.add(n,ru,1),e.mesh()}function Du(e){return e.box(.26,.75,.3,0,-.35,0,Ql),e.box(.16,.8,.16,0,.4,0,Ql),e.bar(0,1.1,0,0,1.75,0,.06,Ql),e.mesh()}var Ou=1.75,ku=new W(-.6,6,0),Au=[new W(6.6,2.6,0),new W(-8.6,2.5,0)];function ju(e){let t=[.15,.16,.17],n=[.045,.045,.05];e.box(20,2,4.6,-1,-.8,0,t),e.box(3.2,1.9,3.4,10.4,-.6,0,t),e.box(1.9,1.7,1.9,12.7,-.4,0,t),e.box(20.4,.25,4.8,-1,1.1,0,n),e.box(7.2,1.9,3.2,-1.5,1.2,0,t),e.box(3.2,1.8,2.8,.8,3.1,0,t),e.box(.1,.55,2.3,2.42,3.95,0,tu,1.3);for(let t of[-1,1])e.box(2.5,.55,.1,.8,3.95,t*1.42,tu,1);for(let t=0;t<3;t++)e.box(.5,.5,.08,-3.6+t*1.6,1.9,1.62,tu,.8);for(let t=0;t<3;t++)e.box(.5,.5,.08,-3.6+t*1.6,1.9,-1.62,tu,.8);let r=new fr(.6,.72,2.8,10);r.translate(-3.4,4.5,0),e.add(r,n),e.bar(.9,4.9,0,.9,10,0,.14,Ql),e.bar(.9,8.6,-1.5,.9,8.6,1.5,.08,Ql),e.box(.22,.22,.22,.9,10,0,iu,1),e.box(.2,.2,.2,1.6,4.9,1.45,[.1,2.6,.4],1),e.box(.2,.2,.2,1.6,4.9,-1.45,nu,.8);for(let t of Au)e.box(1.2,t.y-1.5,1.2,t.x,1.2,0,Ql);return e.box(.9,.5,.9,-.6,4.9,0,Ql),e.mesh()}var Mu=[[16,15.4,5.8],[16,15.4,-5.8],[21.8,24.6,0],[-32.4,18,0],[34,7.9,0],[-30,8.2,3],[-30,8.2,-3],[56,4.6,0]].map(e=>new W(...e)),Nu=[];for(let e of[46,28,12,-8,-22,-46])for(let t of[6.4,-6.4])Nu.push(new W(e,5.3,t));Nu.push(new W(13,18.3,2.2),new W(13,18.3,-2.2));function Pu(e){let t=[.11,.12,.13],n=[.07,.065,.06],r=[.15,.16,.17],i=[.04,.04,.045];e.box(96,7.5,15,0,-3.5,0,t),e.box(9,7,11,52,-3.2,0,t),e.box(7,6.5,7,59.5,-2.9,0,t),e.box(4.5,6,3.2,64.5,-2.4,0,t),e.box(8,6.8,12,-51,-3.3,0,t),e.box(5,6,8,-56.5,-2.6,0,t),e.box(97,.3,15.4,0,3.9,0,n),e.box(42,4,11,-2,4,0,r),e.box(26,3.6,9,5,8,0,r),e.box(11,3.2,10,15,11.6,0,r),e.box(.15,.9,8.6,20.55,12.8,0,tu,1.4),e.box(7,2.6,6,13,14.8,0,r);for(let t of[-1,1])e.box(2.2,.25,1.8,16,14.8,t*5.8,Ql);e.box(12,3.4,9,-30,4,0,r);for(let t of[-4,-13]){let n=new fr(1.8,2,12,14);n.translate(t,14,0),e.add(n,i)}e.bar(20,14.8,0,20,29,0,.35,Ql),e.bar(20,26.5,-5,20,26.5,5,.15,Ql),e.box(2.6,.3,2.6,21.8,23.6,0,Ql),e.box(.3,.3,.3,20,29.2,0,iu,1),e.bar(-34,7.4,0,-34,22,0,.3,Ql),e.box(2.6,.3,2.6,-32.4,17,0,Ql),e.box(.3,.3,.3,-34,22.2,0,iu,1),e.box(7,2.8,6.5,34,4,0,r),e.box(7,2.8,6.5,-42,4,0,r);for(let t of[-.9,.9])e.bar(36.5,5.6,t,46,6.4,t,.35,Ql),e.bar(-44.5,5.6,t,-53,6.4,t,.35,Ql);for(let t=-44;t<=46;t+=3.2)for(let n of[-1,1])Math.round(t*7+n*3)%5!=0&&e.box(.55,.55,.1,t,1.6,n*7.55,tu,.9);for(let t=-20;t<=16;t+=2.4)for(let n of[-1,1])e.box(.9,.7,.1,t,5.6,n*5.55,tu,1.1);for(let t=-6;t<=15;t+=2.4)for(let n of[-1,1])e.box(.9,.6,.1,t,9.4,n*4.55,tu,1);for(let t=-48;t<=50;t+=12)for(let n of[-1,1])e.box(.3,.3,.3,t,4.5,n*7.2,tu,2);for(let t of Nu)t.y<10&&e.box(1.7,.9,1.7,t.x,4,t.z,Ql);return e.mesh()}function Fu(e,t,n,r,i,a=null){let o=new Sl,s=new ut,c=[],l=[],u=[],d=[],f=[],p=e.site,m=e=>(!p||Math.hypot(e.x-p.x,e.z-p.z)>260)&&(!a||a.distTo(e.x,e.z)>800),h=Xl(e,n,r,i),g=new fr(33.8,.8,au,20,6,!0);g.translate(0,750.9,0);let _=new Er({uniforms:{uCamPos:Q.uCamPos,uTime:Q.uTime,uMist:Q.uMist,uRain:Q.uRain,uNoiseTex:Q.uNoiseTex,...r},vertexShader:vu,fragmentShader:yu,transparent:!0,blending:2,depthTest:!1,depthWrite:!1,side:2}),v=(e,t,r)=>{let i=Eu(o);i.position.copy(e),s.add(i);let a=new Hn(g,_);a.position.copy(e),a.frustumCulled=!1,n.add(a);let l={pivot:e,head:i,beam:a,phase:t,th:Math.atan2(e.z,e.x),dir:new W(.3,-1,0).normalize(),target:null,seen:-99,mode:`post`,...r};return c.push(l),l},y=(e,t)=>{let n=Du(o);n.position.copy(e),n.quaternion.setFromUnitVectors(su,new W(.4,.6,0).normalize()),s.add(n),l.push({pos:e,mesh:n,range:850,rate:9,wait:0,cycle:0,on:!1,clear:!1,losAt:0,acc:0,lead:1,err:new W,dir:new W(0,1,0),...t})},b=(e,t)=>{if(c.length>=ou||c.some(t=>Math.hypot(t.pivot.x-e.x,t.pivot.z-e.z)<55))return;f.push({x:e.x,z:e.z,r:13});let n=Tu(o);n.position.set(e.x,e.y,e.z),n.rotation.y=t*2.1,n.updateMatrix(),s.add(n),v(new W(e.x,e.y+2.6,e.z),t),y(wu.clone().applyMatrix4(n.matrix))};for(let t=0;t<40;t++){let n=-Math.PI/2+.07+t*Math.PI*2/40,r=t%2?1:-1,i=bu(e,n,r,70,300,90,360)||bu(e,n,-r,70,300,90,360)||bu(e,n,r,3.5,70,70,280)||bu(e,n,-r,3.5,70,70,280);if(i&&m(i)&&b(i,t*1.7),t%3!=1){let i=bu(e,n+.035,-r,30,280,80,320);i&&m(i)&&b(i,t*2.9+.4)}if(t%10==5){let i=bu(e,n+.05,-r,100,330,130,420)||bu(e,n+.05,r,100,330,130,420);if(i&&m(i)){f.push({x:i.x,z:i.z,r:24});let e=Su(o);e.position.set(i.x,i.y,i.z),e.rotation.y=t,s.add(e);let n=Cu(o);n.position.set(i.x,i.y+15,i.z),d.push(n.position),s.add(n),u.push(n)}}}let x=c.length;t.add(s);let S=[];for(let e=0;e<14;e++){o.box(6.4,.55,1.7,0,-.15,0,[.07,.05,.035]),o.box(1.3,.5,1.3,3.4,.05,0,[.07,.05,.035]),o.box(1.3,.5,1.3,-3.4,.05,0,[.07,.05,.035]),o.box(2.6,.9,1.5,-.4,.4,0,[.11,.1,.07]);let t=o.mesh();t.rotation.order=`YXZ`,s.add(t),S.push({mesh:t,pos:t.position,th:-Math.PI/2+.35+e*.45,off:e*37%60-30,phase:e*1.9,kind:`boat`})}let C=(e,t,n,r,i,a)=>{v(new W,a,{mode:`boat`,carrier:e,local:t});for(let t of n)y(new W,{carrier:e,local:t,range:r,rate:i})},w=[],T=Math.PI*2-.7;for(let e=0;e<12;e++){let t=ju(o);t.rotation.order=`YXZ`,s.add(t);let n=e>=10,r=n?Dc-.045:Dc+.35+e*T/10;if(a&&!n){let e=Math.atan2(a.field.z,a.field.x),t=Math.atan2(Math.sin(r-e),Math.cos(r-e));Math.abs(t)<.75&&(r=e+(t<0?-.75:.75)+t*.1)}let i={mesh:t,pos:t.position,phase:e*2.7,sgn:-1,yaw:void 0,c:r,A:n?0:.18,w:.017+e%3*.004,off:n?e===10?-45:45:e%2?26:-26,th:0};w.push(i),C(i,ku,Au,900,10,e*3.1+.7)}let E=Pu(o);E.rotation.order=`YXZ`,s.add(E);let D={mesh:E,pos:E.position,th:Dc,ship:!0,sgn:-1};Mu.forEach((e,t)=>v(new W,t*1.37,{mode:`ship`,carrier:D,local:e}));for(let e of Nu)y(new W,{carrier:D,local:e,range:1e3,rate:7});let O=Cu(o);O.scale.setScalar(.7),O.position.set(13,17.4,0),E.add(O),u.push(O);let k=(t,n,r,i,a,o,s)=>{let c=t.pos.x,l=t.pos.z,u=i/2,d=a/2,f=Gc(c+n*u,l+r*u,s,e),p=Gc(c-n*u,l-r*u,s,e),m=Gc(c-r*d,l+n*d,s,e),h=Gc(c+r*d,l-n*d,s,e);t.pos.y=(f+p+m+h+2*Gc(c,l,s,e))/6+o,t.mesh.rotation.set(-Math.atan2(m-h,a),Math.atan2(-r,n),Math.atan2(f-p,i))},A=(e,t,n)=>{let r=Tc(e)+t;return n.set(Math.cos(e)*r,0,Math.sin(e)*r)},j=e=>Math.atan2(Math.sin(e),Math.cos(e)),M=new W,N=new W,P=new W,ee=new W,F=new W,I=new W,te=new W,L={pos:new W,kind:`plane`},ne=[],re=c.slice(),R={plane:``,boats:0,firing:0,hits:0,flagship:-1},z=-99,B=(e,t,n)=>{P.copy(t).sub(e.pivot);let r=P.dot(e.dir);return r<5||r>cu?!1:P.addScaledVector(e.dir,-r).length()<(.8+r*.022)*n},ie=(t,n)=>{for(let r=1;r<12;r++){let i=r/12,a=t.x+(n.x-t.x)*i,o=t.y+(n.y-t.y)*i,s=t.z+(n.z-t.z)*i;if(o<e.sample(a,s)+1.5)return!1}return!0};return{group:s,lights:c,guns:l,boats:S,patrols:w,ship:D,clearings:f,radars:u.length,posts:x,status:R,gunfire:h,update(e,t,n,r){for(let t of u)t.rotation.y+=e*.55;for(let n of S){n.th+=6.5*e/Tc(n.th);let r=Math.sign(n.off||1);A(n.th,n.off+r*100*Oc(n.th),n.pos),A(n.th+.002,n.off+r*100*Oc(n.th+.002),M).sub(n.pos).normalize(),k(n,M.x,M.z,7,1.7,.1,t)}for(let n of w){n.th=n.c+n.A*Math.sin(t*n.w+n.phase),n.A>0&&(n.sgn=Math.cos(t*n.w+n.phase)>=0?1:-1);let r=n.off+10*Math.sin(t*.05+n.phase);A(n.th,r,n.pos),A(n.th+.002,r,M).sub(n.pos);let i=Math.atan2(M.z,M.x)+(n.sgn<0?Math.PI:0);n.yaw===void 0&&(n.yaw=i),n.yaw+=Math.max(-.3*e,Math.min(.3*e,j(i-n.yaw))),k(n,Math.cos(n.yaw),Math.sin(n.yaw),22,4.6,.5,t),n.mesh.updateMatrix()}A(Dc,0,D.pos),A(Dc-.002,0,M).sub(D.pos).normalize();let i=.05*Math.sin(t*.045),a=M.x*Math.cos(i)-M.z*Math.sin(i),o=M.x*Math.sin(i)+M.z*Math.cos(i);k(D,a,o,116,15,.2,t),D.mesh.updateMatrix();for(let e of c)e.carrier&&(e.pivot.copy(e.local).applyMatrix4(e.carrier.mesh.matrix),e.head.position.copy(e.pivot),e.beam.position.copy(e.pivot),e.th=e.carrier.th);for(let e of l)e.carrier&&(e.pos.copy(e.local).applyMatrix4(e.carrier.mesh.matrix),e.mesh.position.copy(e.pos));ne.length=0;for(let e of S)ne.push(e);n&&(L.pos.copy(n),ne.push(L));let s=!1;if(n){for(let e of d)n.y>e.y-25&&e.distanceTo(n)<2200&&(s=!0);D.pos.distanceTo(n)<1700&&(s=!0)}let f=!1,p=!1,m=``,g=new Set;for(let r of c){r.target&&(!ne.includes(r.target)||r.pivot.distanceTo(r.target.pos)>cu*1.15||t-r.seen>lu)&&(r.target=null),r.target&&r.target.kind===`boat`&&t-r.since>uu&&(r.checked=r.target,r.checkedUntil=t+du,r.target=null);for(let e of ne)e===r.target||e===r.checked&&t<r.checkedUntil||!B(r,e.pos,1)||r.target&&e.kind!==`plane`||(r.target=e,r.seen=t,r.since=t);if(r.target&&B(r,r.target.pos,1.6)&&(r.seen=t),r.target)N.copy(r.target.pos).sub(r.pivot).normalize(),N.x+=.012*Math.sin(t*1.3+r.phase),N.z+=.012*Math.sin(t*1.7+r.phase*3);else if(s&&n&&r.pivot.distanceTo(n)<cu*1.3){N.copy(n).sub(r.pivot);let e=N.length();N.x+=.09*e*Math.sin(t*.9+r.phase),N.y+=.07*e*Math.sin(t*1.3+r.phase*2),N.z+=.09*e*Math.cos(t*.7+r.phase)}else if(r.mode===`ship`){let e=r.phase*2.3+t*(.1+.03*Math.sin(r.phase)),n=380+260*Math.sin(t*.17+r.phase*2),i=40+420*Math.max(0,Math.sin(t*.11+r.phase*1.3));N.set(D.pos.x+Math.cos(e)*n,i,D.pos.z+Math.sin(e)*n).sub(r.pivot)}else if(r.mode===`boat`){let e=r.th+r.carrier.sgn*(.06+.035*Math.sin(t*.23+r.phase)),n=Tc(e)+91*Math.sin(t*.6+r.phase*1.7),i=Math.max(0,Math.sin(t*.19+r.phase));N.set(Math.cos(e)*n,260*i*i,Math.sin(e)*n).sub(r.pivot)}else{let e=r.th+.13*Math.sin(t*.12+r.phase),n=Tc(e)+70*Math.sin(t*.47+r.phase*1.7);N.set(Math.cos(e)*n,0,Math.sin(e)*n).sub(r.pivot)}r.dir.lerp(N.normalize(),1-Math.exp(-e*(r.target?3.2:1.3))).normalize(),r.target===L?(p=!0,B(r,n,1.2)&&(f=!0,r.carrier&&!m&&(m=r.carrier.ship?` BY FLAGSHIP`:` BY GUNBOAT`))):r.target&&g.add(r.target),r.head.quaternion.setFromUnitVectors(su,r.dir),r.beam.quaternion.copy(r.head.quaternion)}let _=Q.uCamPos.value;for(let e of c){let t=e.dir.y<-.02?Math.min(e.pivot.y/-e.dir.y,cu):cu*.5;te.copy(e.pivot).addScaledVector(e.dir,t);let n=_.distanceTo(e.pivot);e.rank=e.target===L?-1:Math.min(n,_.distanceTo(te)),e.beam.visible=n<3600}re.sort((e,t)=>e.rank-t.rank);let v=Math.min(re.length,16);for(let e=0;e<v;e++)Q.uBeamPos.value[e].copy(re[e].pivot),Q.uBeamDir.value[e].copy(re[e].dir);Q.uBeamCount.value=v,f&&(z=t);let y=n&&t-z<fu,b=0;for(let i of l){if(!y){i.on=!1,i.wait=.4+Math.random()*.9;continue}let a=i.pos.distanceTo(n);if(a>i.range||(t>i.losAt&&(i.clear=ie(i.pos,n),i.losAt=t+.25+Math.random()*.15),!i.clear))continue;if(i.wait>0){i.wait-=e;continue}let o=a/760;ee.copy(n).addScaledVector(r,o*i.lead),ee.y+=.5*_u*o*o,i.err.x+=(Math.random()-.5)*e*.14,i.err.y+=(Math.random()-.5)*e*.14,i.err.z+=(Math.random()-.5)*e*.14,i.err.length()>mu&&i.err.setLength(mu),N.copy(ee).sub(i.pos).normalize().add(i.err).normalize();let s=i.dir.angleTo(N),c=gu*e;if(s>c?i.dir.lerp(N,c/s).normalize():i.dir.copy(N),i.mesh.quaternion.setFromUnitVectors(su,i.dir),s>.06||(i.cycle-=e,i.cycle<=0&&(i.on=!i.on,i.cycle=i.on?.8+Math.random():.35+Math.random()*.6,i.on&&(i.lead=.45+Math.random()*.8)),!i.on))continue;b++,i.acc+=e*i.rate,I.copy(i.pos).addScaledVector(i.dir,Ou);let l=_.distanceTo(I);for(;i.acc>=1;)--i.acc,F.set(i.dir.x+(Math.random()-.5)*hu,i.dir.y+(Math.random()-.5)*hu,i.dir.z+(Math.random()-.5)*hu).normalize(),h.fire(I,F,l)}return R.hits=h.update(e,n,pu),R.firing=b,R.plane=f?`SPOTTED`+m:p?`SEARCHLIGHTS HUNTING`:s?`RADAR CONTACT`:``,R.boats=g.size,R.flagship=n?D.pos.distanceTo(n):-1,R}}}var Iu=2400,Lu=9.8,Ru=0,zu=1,Bu=2,Vu=3,Hu=4,Uu=[!0,!1,!0,!0,!1],Wu=`
attribute vec2 aCorner;
attribute vec4 aPS; // centre, half size in metres
attribute vec4 aD;  // age 0..1, seed, kind, strength
varying vec2 vUv;
varying vec2 vN;
varying vec4 vD;
varying vec3 vC;
varying float vZ;
varying float vR;
void main() {
  vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
  vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  float hs = aPS.w;
  float str = aD.w;
  if (aD.z > 1.5 && aD.z < 2.5) {
    // embers stay at least a couple of pixels wide; the same light spreads over the bigger dot
    hs = max(aPS.w, length(aPS.xyz - cameraPosition) * 0.0018);
    str *= aPS.w / hs;
  }
  vec4 mv = viewMatrix * vec4(aPS.xyz + (right * aCorner.x + up * aCorner.y) * hs, 1.0);
  // each puff turns slowly so the noise does not look stamped on
  float a = aD.y * 6.2832 + aD.x * (aD.y - 0.5) * 3.0;
  float c = cos(a), s = sin(a);
  vN = mat2(c, s, -s, c) * aCorner;
  vUv = aCorner;
  vD = vec4(aD.xyz, str);
  vC = aPS.xyz;
  vZ = -mv.z;
  vR = hs;
  gl_Position = projectionMatrix * mv;
}
`,Gu=`
uniform sampler2D tDepth;
uniform vec2 uRes;
uniform float uNear;
uniform float uFar;
uniform sampler2D uNoiseTex;
uniform vec3 uFogAmbient;
uniform vec3 uMoonColor;
uniform vec3 uBlastPos;
uniform vec3 uBlastColor;
varying vec2 vUv;
varying vec2 vN;
varying vec4 vD;
varying vec3 vC;
varying float vZ;
varying float vR;

float linearDepth(float d) {
  float z = d * 2.0 - 1.0;
  return 2.0 * uNear * uFar / (uFar + uNear - z * (uFar - uNear));
}
// fades a puff out where it meets rock or water instead of cutting a hard line
float softEdge() {
  float scene = linearDepth(texture(tDepth, gl_FragCoord.xy / uRes).x);
  return clamp((scene - vZ) / max(vR * 0.5, 0.3), 0.0, 1.0);
}
float puffNoise() {
  vec2 q = vN * 0.2 + vD.y * vec2(7.13, 3.71) + vec2(0.0, -vD.x * 0.12);
  return texture(uNoiseTex, q).r * 0.6 + texture(uNoiseTex, q * 2.7 + 0.31).g * 0.4;
}
`,Ku=`
${Gu}
// white-yellow when hottest, through orange to a dull red as it cools
vec3 fireRamp(float h) {
  vec3 c = vec3(0.85, 0.1, 0.02) * smoothstep(0.03, 0.25, h);
  c = mix(c, vec3(1.0, 0.4, 0.07), smoothstep(0.2, 0.55, h));
  c = mix(c, vec3(1.0, 0.78, 0.42), smoothstep(0.55, 1.0, h));
  return c * h * 1.5;
}
void main() {
  float r = length(vUv);
  if (r >= 1.0) discard;
  float s = softEdge();
  if (s <= 0.0) discard;
  float age = vD.x, kind = vD.z, str = vD.w;
  float fog = exp(-vZ * 0.0005);
  if (kind < 0.5) {
    float n = puffNoise();
    float shape = smoothstep(1.0, 0.2, r + (n - 0.5) * 1.2);
    float fade = pow(1.0 - age, 1.4);
    vec3 col = fireRamp(min(str * fade * (0.45 + 0.75 * shape) * (0.5 + n), 1.2));
    float a = shape * smoothstep(0.0, 0.25, fade) * s;
    gl_FragColor = vec4(col * a * fog, a * 0.6);
    return;
  }
  vec3 col = kind < 2.5
    ? vec3(4.0, 1.5, 0.35) * str * (1.0 - age) * pow(1.0 - r, 2.0)
    : vec3(2.0, 1.4, 0.85) * str * pow(1.0 - age, 2.0) * pow(1.0 - r, 2.5);
  gl_FragColor = vec4(col * s * fog, 0.0);
}
`,qu=`
${Gu}
void main() {
  float r = length(vUv);
  if (r >= 1.0) discard;
  float s = softEdge();
  if (s <= 0.0) discard;
  float age = vD.x, kind = vD.z, str = vD.w;
  float n = puffNoise();
  float shape = smoothstep(1.0, 0.15, r + (n - 0.5) * 1.3);
  vec3 b = uBlastPos - vC;
  vec3 lit = uBlastColor * 0.05 * 900.0 / (dot(b, b) + 900.0);
  vec3 col;
  float a;
  if (kind < 1.5) {
    // oily black smoke that glows from underneath while it is still close to the fire
    a = shape * str * smoothstep(0.0, 0.05, age) * (1.0 - smoothstep(0.4, 1.0, age));
    col = (vec3(0.035, 0.03, 0.028) + uMoonColor * 0.02) * (0.6 + 0.8 * n) + lit;
    col += vec3(1.0, 0.36, 0.08) * 0.9 * pow(max(1.0 - age * 5.0, 0.0), 2.0) * (0.3 + n);
  } else {
    // spray and steam
    a = shape * str * (1.0 - age) * smoothstep(0.0, 0.05, age) * 0.7;
    col = (uFogAmbient * 1.5 + uMoonColor * 0.12) * (0.7 + 0.6 * n) + lit * 2.0;
  }
  gl_FragColor = vec4(col, a * s * exp(-vZ * 0.0004));
}
`,Ju=[new W(0,0,0),new W(-2.6,-.15,-1),new W(2.6,-.15,-1),new W(0,.5,4.2)],$=(e,t)=>e+Math.random()*(t-e);function Yu(e,t=0){do e.set(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1);while(e.lengthSq()>1||e.lengthSq()<.01);return e.normalize(),e.y+=t,e.normalize()}function Xu(e,t,n,r,i){let a=Array.from({length:Iu},()=>({live:!1,kind:0,p:new W,v:new W,age:0,life:1,s0:1,s1:1,seed:0,drag:1,rise:0,grav:0,wind:0,str:1,d:0})),o=0,s=()=>{for(let e=0;e<Iu;e++){let t=a[(o+e)%Iu];if(!t.live)return o=(o+e+1)%Iu,t}return null};function c(e,t,n,r,i,a,o={}){let c=s();return c?(c.live=!0,c.kind=e,c.p.copy(t),c.v.copy(n),c.age=-(o.delay||0),c.life=r,c.s0=i,c.s1=a,c.seed=Math.random(),c.drag=o.drag??1,c.rise=o.rise??0,c.grav=o.grav??0,c.wind=o.wind??0,c.str=o.str??1,c):null}let l={uNoiseTex:Q.uNoiseTex,uFogAmbient:Q.uFogAmbient,uMoonColor:Q.uMoonColor,uBlastPos:Q.uBlastPos,uBlastColor:Q.uBlastColor,uNear:{value:i.near},uFar:{value:i.far},...n};function u(e,n,r){let i=new ai;i.setAttribute(`position`,new Y(new Float32Array(12),3)),i.setAttribute(`aCorner`,new Y([-1,-1,1,-1,-1,1,1,1],2)),i.setIndex([0,1,2,1,3,2]);let a=new Kn(new Float32Array(Iu*4),4).setUsage(N),o=new Kn(new Float32Array(Iu*4),4).setUsage(N);i.setAttribute(`aPS`,a),i.setAttribute(`aD`,o),i.instanceCount=0;let s=new Er({uniforms:l,vertexShader:Wu,fragmentShader:e,transparent:!0,blending:n,depthTest:!1,depthWrite:!1});n===5&&(s.blendSrc=201,s.blendDst=205,s.blendSrcAlpha=200,s.blendDstAlpha=201);let c=new Hn(i,s);return c.frustumCulled=!1,c.renderOrder=r,t.add(c),{geo:i,ps:a,d:o,n:0}}let d=u(qu,1,6),f=u(Ku,5,7),p=new W,m=new W,h=new W,g=new W,_=new W;function v(e,t){let n=r&&r.ctx;if(!n||!r.white)return;let i=1/(1+e/400),a=n.currentTime+Math.min(e/343,3),o=t*(.35+.9*i),s=n.createBufferSource();s.buffer=r.brown||r.white,s.loop=!0;let c=n.createBiquadFilter();c.type=`lowpass`,c.frequency.setValueAtTime(400+1400*i,a),c.frequency.exponentialRampToValueAtTime(60,a+2.6);let l=n.createGain();l.gain.setValueAtTime(0,n.currentTime),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(1.5*o,a+.015),l.gain.exponentialRampToValueAtTime(.001,a+3.2),s.connect(c).connect(l).connect(r.master),s.start(a,Math.random()*4),s.stop(a+3.3);let u=n.createOscillator();u.frequency.setValueAtTime(70,a),u.frequency.exponentialRampToValueAtTime(28,a+.5);let d=n.createGain();d.gain.setValueAtTime(0,n.currentTime),d.gain.setValueAtTime(.9*o*i,a),d.gain.exponentialRampToValueAtTime(.001,a+.7),u.connect(d).connect(r.master),u.start(a),u.stop(a+.75);let f=n.createBufferSource();f.buffer=r.white;let p=n.createBiquadFilter();p.type=`highpass`,p.frequency.value=700;let m=n.createGain();m.gain.setValueAtTime(0,n.currentTime),m.gain.setValueAtTime(.7*o*i,a),m.gain.exponentialRampToValueAtTime(.001,a+.35),f.connect(p).connect(m).connect(r.master),f.start(a,Math.random()*3),f.stop(a+.4)}function y(e,t){let n=r&&r.ctx;if(!n||!r.white)return;let i=1/(1+e/300),a=n.currentTime+Math.min(e/343,3),o=n.createBufferSource();o.buffer=r.white;let s=n.createBiquadFilter();s.type=`bandpass`,s.frequency.setValueAtTime(900,a),s.frequency.exponentialRampToValueAtTime(250,a+1.2),s.Q.value=.6;let c=n.createGain();c.gain.setValueAtTime(0,n.currentTime),c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(t*(.2+.9*i),a+.03),c.gain.exponentialRampToValueAtTime(.001,a+1.5),o.connect(s).connect(c).connect(r.master),o.start(a,Math.random()*3),o.stop(a+1.6)}let b=[],x=[];function S(e,t,n,r){for(let i=0;i<n;i++)Yu(h,.5),x.push({p:e.clone().addScaledVector(Yu(p),1.5),v:t.clone().multiplyScalar(.55).addScaledVector(h,$(.4,1)*r),age:0,burn:$(1.3,3.2),acc:0,fire:0})}function C(e,t,n=1,r=10){c(Vu,e,g,.14,10*n,14*n,{drag:0,str:.7});for(let r=0;r<6;r++)p.copy(e).addScaledVector(Yu(h),Math.random()),c(Ru,p,h.multiplyScalar($(2,6)).addScaledVector(t,.3),$(.35,.55),2*n,6*n,{drag:3,rise:3,str:1.4});let i=Math.round(22*n);for(let r=0;r<i;r++)p.copy(e).addScaledVector(Yu(h,.2),$(0,2.5)*n),c(Ru,p,h.multiplyScalar($(4,14)*n).addScaledVector(t,.35),$(.7,1.4),1.5*n,$(5,9)*n,{drag:2.4,rise:5,str:$(.8,1.15)});let a=Math.round(22*n);for(let r=0;r<a;r++)p.copy(e).addScaledVector(Yu(h,.3),$(0,3)*n),c(zu,p,h.multiplyScalar($(3,10)*n).addScaledVector(t,.3),$(5,8),3*n,$(10,16)*n,{delay:$(.15,.6),drag:1,rise:2.8,wind:.6,str:.9});let o=Math.round(70*n);for(let n=0;n<o;n++)c(Bu,e,Yu(h,.3).multiplyScalar($(12,50)).addScaledVector(t,.45),$(.8,2.2),.3,.2,{drag:.35,grav:1,str:$(.6,1.2)});S(e,t,r,38*Math.sqrt(n)),b.push({p:e.clone(),v:t.clone().multiplyScalar(.35),t:0,I0:4*n}),v(_.distanceTo(e),Math.min(1.2,n))}function w(e,t=1){let n=Math.round(36*t);for(let r=0;r<n;r++)p.set(e.x+$(-1.5,1.5)*t,.3,e.z+$(-1.5,1.5)*t),m.set($(-4,4),$(10,26)*Math.sqrt(t),$(-4,4)),c(Hu,p,m,$(1.2,2.2),1.2,$(4,7)*t,{drag:.5,grav:1,str:.8});let r=Math.round(14*t);for(let n=0;n<r;n++)p.set(e.x,1,e.z),m.set($(-6,6),2,$(-6,6)),c(Hu,p,m,$(2.5,4),2,$(8,12)*t,{drag:1.2,rise:1,wind:.5,str:.35});y(_.distanceTo(e),Math.min(1,t))}let T=null,E=[],D=new W,O=0,k=1.2,A=new Re,j=new Re,M=new W(1,1,1),P=new W(1e-4,1e-4,1e-4),ee=new ge;function F(e,t,n,r,i,a,o,s,c,l,u){E.push({ids:e,pivot:Ju[t],p:Ju[t].clone().applyQuaternion(r).add(n),q:r.clone(),v:i,w:a,cd:o,r:s,main:c,emit:l,burn:u,state:`fly`,t:0,acc:0,accS:0})}function I(e,t){L(),T=e,T.setBroken(!0),O=0,k=1.2;let n=t.location,r=t.rotation,i=t.velocityDir.clone().multiplyScalar(t.speed),a=new W(0,0,-1).applyQuaternion(r),o=new W(0,1,0).applyQuaternion(r),s=new W(1,0,0).applyQuaternion(r),c=Math.random()<.5?1:2,l=c===1?-1:1,u=Math.random()<.55,d=[0,3-c];u||d.push(3),F(d,0,n,r,i.clone().multiplyScalar(.9).add(p.set(0,-8,0)),a.clone().multiplyScalar(l*$(2.2,3.8)).addScaledVector(s,-.4),.005,1.2,!0,[new W(l*.7,-.3,-1),new W(0,.1,-3.4)],99),F([c],c,n,r,i.clone().multiplyScalar(.72).addScaledVector(s,l*5).addScaledVector(o,3).addScaledVector(Yu(p),3),Yu(m).multiplyScalar($(5,9)),.03,.5,!1,[new W(l*.2,-.3,-1)],1.6),u&&F([3],3,n,r,i.clone().multiplyScalar(.78).addScaledVector(o,2).addScaledVector(Yu(p),3),Yu(m).multiplyScalar(6),.025,.6,!1,[new W(0,.3,3.6)],.8),D.copy(n),C(n,i,1,10)}function te(t,n){L(),T=t,T.setBroken(!0),O=0,k=2.2;let r=n.location,i=n.rotation,a=n.velocityDir.clone().multiplyScalar(n.speed),o=new W(1,0,0).applyQuaternion(i),s=e.sample(r.x,r.z),c=s<.3,l=r.clone();l.y=Math.max(l.y,Math.max(s,0)+.6),F([0],0,l,i,new W,new W,.005,1.2,!0,[new W(0,.1,-3.4)],99);let u=E[E.length-1];u.state=c?`sink`:`ground`,u.tDown=0,c&&(u.p.y=0);for(let[t,n]of[[1,-1],[2,1],[3,0]]){F([t],t,l,i,a.clone().multiplyScalar($(.2,.4)).addScaledVector(o,n*$(4,9)).add(p.set(0,$(8,16),0)).addScaledVector(Yu(m),4),Yu(m).multiplyScalar($(5,10)),.03,.5,!1,[new W(n*.3,-.3,t===3?3.6:-1)],1.4);let r=E[E.length-1];r.p.y=Math.max(r.p.y,Math.max(e.sample(r.p.x,r.p.z),0)+1.5)}D.copy(l),C(l,a.multiplyScalar(.2),c?.8:1,c?5:10),c&&w(l,1.4)}function L(){T&&T.setBroken(!1),T=null,E.length=0,x.length=0}let ne=(e,t,n)=>n.copy(t).sub(e.pivot).applyQuaternion(e.q).add(e.p);function re(t,n){if(t.t+=n,t.state===`fly`){t.v.y-=Lu*n,t.v.multiplyScalar(1/(1+t.cd*t.v.length()*n)),t.p.addScaledVector(t.v,n);let r=t.w.length();r>1e-4&&t.q.premultiply(ee.setFromAxisAngle(p.copy(t.w).divideScalar(r),r*n)).normalize();let i=e.sample(t.p.x,t.p.z);if(t.p.y<Math.max(i,0)+t.r){if(t.tDown=t.t,i<.3)w(t.p,t.main?1:.45),t.state=`sink`,t.p.y=0,t.w.multiplyScalar(.12);else if(t.state=`ground`,t.p.y=i+t.r*.4,t.w.set(0,0,0),t.main)C(t.p,g,.6,5);else for(let e=0;e<12;e++)c(Bu,t.p,Yu(h,.6).multiplyScalar($(6,16)),$(.4,.9),.15,.1,{drag:.5,grav:1})}}else if(t.state===`sink`){t.p.y-=1.3*n;let e=t.w.length();e>1e-4&&t.q.premultiply(ee.setFromAxisAngle(p.copy(t.w).divideScalar(e),e*n)).normalize(),t.p.y<-9&&(t.state=`gone`)}let r=Math.max(0,1-t.t/t.burn);if(t.state===`fly`&&r>0){let e=t.main?45:18;for(t.acc+=n*e;t.acc>=1;){--t.acc;let e=t.emit[Math.random()*t.emit.length|0];ne(t,e,p).addScaledVector(Yu(h),.4),c(Ru,p,h.multiplyScalar(2).addScaledVector(t.v,.25),$(.35,.55),t.main?.9:.5,t.main?$(3.2,4.2):$(1.4,2),{drag:3,rise:4,str:.4+.7*r})}let i=t.main?1.3:2;for(t.accS+=t.v.length()*n+n*4;t.accS>=i;)t.accS-=i,ne(t,t.emit[0],p).addScaledVector(t.v,-Math.random()*n),c(zu,p,m.copy(t.v).multiplyScalar(.08),t.main?$(3.8,5):$(2,3),t.main?1.4:.9,t.main?$(6,10):$(4,6),{drag:1,rise:2.5,wind:.6,str:(t.main?.95:.6)*(.3+.7*r)})}else if(t.state===`ground`&&t.main){for(t.acc+=n*32;t.acc>=1;)--t.acc,p.copy(t.p).add(m.set($(-2.5,2.5),$(0,1),$(-2.5,2.5))),c(Ru,p,h.set($(-1,1),$(1,3),$(-1,1)),$(.6,.9),1.5,$(5,7),{drag:2.5,rise:7,wind:.3,str:.9});for(t.accS+=n*9;t.accS>=1;)--t.accS,p.copy(t.p).add(m.set($(-2,2),3,$(-2,2))),c(zu,p,h.set(0,3,0),$(6,8),3,$(25,35),{drag:.8,rise:4,wind:.8,str:.75})}else if(t.state===`sink`&&t.t<99)for(t.accS+=n*(t.main?14:5);t.accS>=1;)--t.accS,p.set(t.p.x+$(-2,2),.5,t.p.z+$(-2,2)),c(Hu,p,h.set($(-1,1),2,$(-1,1)),$(2.5,3.5),2,$(9,14),{drag:1,rise:2,wind:.6,str:.35*Math.max(0,1+t.p.y/9)});if(T){t.state===`gone`?A.compose(t.p,t.q,P):A.compose(t.p,t.q,M).multiply(j.makeTranslation(-t.pivot.x,-t.pivot.y,-t.pivot.z));for(let e of t.ids)T.partM[e].copy(A)}}function R(t){for(let n=x.length-1;n>=0;n--){let r=x[n];r.age+=t,r.v.y-=Lu*t,r.v.multiplyScalar(1/(1+.012*r.v.length()*t)),m.copy(r.p),r.p.addScaledVector(r.v,t);let i=e.sample(r.p.x,r.p.z);if(r.p.y<Math.max(i,0)||r.age>8){i<.3&&r.age<=8&&w(r.p,.12),x.splice(n,1);continue}let a=Math.max(0,1-r.age/r.burn);if(!(a<=0)){for(r.fire+=t*50;r.fire>=1;)--r.fire,c(Ru,r.p,p.copy(r.v).multiplyScalar(.1),$(.18,.28),.6,$(1.2,1.8),{drag:4,str:.3+.8*a});for(r.acc+=r.v.length()*t;r.acc>=1.6;)r.acc-=1.6,p.lerpVectors(r.p,m,Math.random()),c(zu,p,h.copy(r.v).multiplyScalar(.05),$(2,3.2),.6,$(3.5,6),{drag:1.2,rise:1.5,wind:.5,str:.1+.55*a})}}}let z=[],B=[];function ie(e,t,n){let r=e.ps.array,i=e.d.array,a=Math.min(t.age/t.life,1),o=t.s0+(t.s1-t.s0)*(1-(1-a)**2.2);r[n*4]=t.p.x,r[n*4+1]=t.p.y,r[n*4+2]=t.p.z,r[n*4+3]=o,i[n*4]=a,i[n*4+1]=t.seed,i[n*4+2]=t.kind,i[n*4+3]=t.str}return{focus:D,blast:C,splash:w,shootDown:I,crash:te,endWreck:L,get watchFor(){return k},get wrecked(){return T!==null},get downFor(){let e=E.find(e=>e.main);return e&&e.state!==`fly`?e.t-e.tDown:-1},update(t,n){_.copy(n),O+=t,T&&T.setBurn(Math.min(1,O/1.5));for(let e of E)re(e,t);let r=E.find(e=>e.main);r&&D.copy(r.p),R(t);let i=Q.uWind.value;z.length=0,B.length=0;let o=0;for(let n of a){if(!n.live)continue;if(n.age+=t,n.age>=n.life){n.live=!1;continue}let r=1-Math.exp(-n.drag*t);n.v.x+=(i.x*n.wind-n.v.x)*r,n.v.z+=(i.y*n.wind-n.v.z)*r,n.v.y+=(n.rise-n.v.y)*r-Lu*n.grav*t,n.p.addScaledVector(n.v,t),n.grav&&n.p.y<Math.max(e.sample(n.p.x,n.p.z),0)?n.live=!1:n.age<0||(n.d=n.p.distanceToSquared(_),Uu[n.kind]?B.push(n):z.push(n))}z.sort((e,t)=>t.d-e.d),B.sort((e,t)=>t.d-e.d);for(let e=0;e<z.length;e++)ie(d,z[e],e);for(let e of B)ie(f,e,o++);f.geo.instanceCount=o,d.geo.instanceCount=z.length,f.ps.needsUpdate=f.d.needsUpdate=!0,d.ps.needsUpdate=d.d.needsUpdate=!0;let s=0,c=Q.uBlastPos.value;for(let e=b.length-1;e>=0;e--){let n=b[e];n.t+=t,n.p.addScaledVector(n.v,t),n.v.multiplyScalar(Math.exp(-2*t));let r=n.I0*(Math.exp(-n.t*3)+.18*Math.exp(-n.t*.7));r<.05?b.splice(e,1):r>s&&(s=r,c.copy(n.p))}let l=.75+.25*Math.sin(O*17.3)*Math.sin(O*6.1+1.3);for(let e of E){if(!e.main)continue;let t=(e.state===`ground`?1.6:e.state===`fly`?.8:0)*l;t>s&&(s=t,c.copy(e.p).y+=e.state===`ground`?3:0)}Q.uBlastColor.value.set(1,.42,.13).multiplyScalar(s)},count(){let e=0;for(let t of a)t.live&&e++;return e}}}function Zu(e){let t=e[0].length,n=[];for(let t of e)for(let e of t)n.push(e[0],e[1],e[2]);let r=[];for(let n=0;n<e.length-1;n++)for(let e=0;e<t;e++){let i=n*t+e,a=n*t+(e+1)%t,o=i+t,s=a+t;r.push(i,a,o,a,s,o)}for(let i of[0,e.length-1]){let a=n.length/3,o=0,s=0,c=0;for(let t of e[i])o+=t[0],s+=t[1],c+=t[2];n.push(o/t,s/t,c/t);for(let e=0;e<t;e++)r.push(i*t+e,i*t+(e+1)%t,a)}let i=new vn;return i.setAttribute(`position`,new Y(n,3)),i.setIndex(r),i.computeVertexNormals(),i}function Qu(e,t=14){return Zu(e.map(([e,n,r,i])=>Array.from({length:t},(a,o)=>{let s=o/t*Math.PI*2;return[Math.cos(s)*n,i+Math.sin(s)*r,e]})))}var $u=[[0,0],[.08,.5],[.3,.62],[.65,.4],[1,.03],[.65,-.22],[.3,-.38],[.08,-.32]];function ed(e,t,n=!1){return Zu(e.map(([e,r,i,a])=>$u.map(([o,s])=>{let c=s*t*i;return n?[c,e,r+o*i]:[e,a+c,r+o*i]})))}function td(){let e=[],t=(t,n,r=[0,0,0],i=0)=>{let a=t.index?t.toNonIndexed():t;a.attributes.uv&&a.deleteAttribute(`uv`);let o=a.attributes.position.count,s=new Float32Array(o).fill(n),c=new Float32Array(o*3);for(let e=0;e<o;e++)c.set(r,e*3);a.setAttribute(`aKind`,new rn(s,1)),a.setAttribute(`aColor`,new rn(c,3)),a.setAttribute(`aPart`,new rn(new Float32Array(o).fill(i),1)),e.push(a)};t(Qu([[-4.2,.4,.55,-.08],[-3.6,.52,.7,-.12],[-2.6,.55,.74,-.1],[-1.4,.52,.66,-.02],[-.2,.48,.62,.02],[1,.42,.52,.05],[2.4,.3,.38,.1],[3.8,.16,.24,.16],[4.9,.04,.1,.22]]),0),t(Qu([[-4.95,.03,.03,.14],[-4.7,.2,.2,.14],[-4.4,.31,.31,.14],[-4.18,.35,.35,.14]],12),1,[.2,.03,.025]),t(Qu([[-1.35,.05,.04,.58],[-.95,.27,.3,.62],[-.2,.31,.38,.66],[.5,.27,.3,.64],[1.15,.08,.06,.6]],10),1,[.015,.02,.028]);let n=e=>-.38+Math.abs(e)*.1,r=e=>ed(e.map(e=>{let t=Math.min(1,Math.abs(e)/5.55),r=Math.abs(e)>5.6?.55:1,i=(2.45-1.25*t)*r;return[e,-2.15+.45*t+(1-r)*.5,i,n(e)]}),.15);t(r([-5.75,-5.55,-.5,0]),0,void 0,1),t(r([0,.5,5.55,5.75]),0,void 0,2),t(ed([[-1.95,4.05,.6,.26],[-.1,3.55,1.25,.26],[.1,3.55,1.25,.26],[1.95,4.05,.6,.26]],.1),0,void 0,3),t(ed([[.15,3.45,1.55,0],[1.2,3.95,1.05,0],[1.8,4.35,.6,0]],.09,!0),0,void 0,3);let i=(e,n,r,i,a)=>{let o=new ur(.12,.08,.16);o.translate(e,n,r),t(o,2,i,a)};return i(-5.72,n(5.72)+.02,-1.25,[3,.25,.2],1),i(5.72,n(5.72)+.02,-1.25,[.2,2.6,.5],2),i(0,.25,4.95,[1.6,1.6,1.5],0),hl(e)}var nd=[1.85,-.3,-1.55],rd=1.2,id=.36,ad=[0,-.02,4],od=.38,sd=.15,cd={mainY:nd[1]-rd-id,mainZ:nd[2],tailY:ad[1]-od-sd,tailZ:ad[2]+.08,wheelR:id};cd.threePoint=Math.atan2(cd.tailY-cd.mainY,cd.tailZ-cd.mainZ),cd.heightAt=e=>-(cd.mainY*Math.cos(e))+cd.mainZ*Math.sin(e);function ld(e,t){let n=e.index?e.toNonIndexed():e;n.attributes.uv&&n.deleteAttribute(`uv`);let r=n.attributes.position.count,i=new Float32Array(r*3);for(let e=0;e<r;e++)i.set(t,e*3);return n.setAttribute(`aKind`,new rn(new Float32Array(r).fill(1),1)),n.setAttribute(`aColor`,new rn(i,3)),n.setAttribute(`aPart`,new rn(new Float32Array(r),1)),n}var ud=[.05,.052,.055],dd=[.012,.012,.012],fd=[.16,.16,.15],pd=`
attribute float aKind;
attribute vec3 aColor;
attribute float aPart;
// once the plane breaks up, each piece is placed in the world by its own matrix
uniform mat4 uPartM[4];
uniform float uBroken;
varying vec3 vLocal;
varying vec3 vLocalN;
varying vec3 vWorldPos;
varying vec3 vNormal;
varying float vKind;
varying vec3 vColor;
void main() {
  vLocal = position;
  vLocalN = normal;
  mat4 M = uBroken > 0.5 ? uPartM[int(aPart + 0.5)] : modelMatrix;
  vec4 wp = M * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  vNormal = mat3(M) * normal;
  vKind = aKind;
  vColor = aColor;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,md=`
varying vec3 vLocal;
varying vec3 vLocalN;
varying vec3 vWorldPos;
varying vec3 vNormal;
varying float vKind;
varying vec3 vColor;
uniform float uBurn;
${bc}

const vec3 BLUE = vec3(0.02, 0.06, 0.26);
const vec3 WHITE = vec3(0.62, 0.62, 0.58);

void main() {
  vec3 wp = vWorldPos;
  vec3 N = normalize(vNormal);
  vec3 Ln = normalize(vLocalN);
  if (!gl_FrontFacing) {
    N = -N;
    Ln = -Ln;
  }
  vec3 p = vLocal;

  vec3 albedo = vColor;
  float gloss = 0.9;
  if (vKind < 0.5) {
    // two-tone camouflage on top, pale grey underneath
    float under = smoothstep(-0.05, -0.35, Ln.y);
    float camo = smoothstep(0.46, 0.54, texture(uNoiseTex, p.xz * 0.045 + 0.2).r);
    vec3 top = mix(vec3(0.085, 0.10, 0.05), vec3(0.13, 0.10, 0.06), camo);
    albedo = mix(top, vec3(0.30, 0.33, 0.35), under);
    gloss = 0.45;

    // wing roundels: white twelve-pointed sun on a blue disc
    vec2 rc = vec2(abs(p.x) - 3.75, p.z + 0.95);
    float rr = length(rc);
    if (abs(Ln.y) > 0.5 && rr < 0.8) {
      float ang = atan(rc.y, rc.x);
      float ray = abs(fract(ang * 12.0 / (2.0 * PI)) - 0.5) * 2.0;        // 0 on a ray's axis
      float rayLen = clamp((rr - 0.34) / 0.28, 0.0, 1.0);                 // 0 at the base, 1 at the tip
      bool sun = rr < 0.3 || (rr > 0.34 && rr < 0.62 && ray < (1.0 - rayLen) * 0.75);
      albedo = sun ? WHITE : BLUE;
    }
    // rudder: blue and white bars
    if (p.z > 4.42 && p.y > 0.3 && abs(Ln.x) > 0.4) {
      albedo = mod(floor(p.y * 8.0), 2.0) < 0.5 ? BLUE : WHITE;
    }
    // shark mouth and eye on the nose
    if (p.z < -2.95 && abs(Ln.x) > 0.25) {
      float s = (p.z + 4.2) / 1.25;                                        // 0 at the nose, 1 at the corner of the mouth
      if (s > 0.0 && s < 1.0) {
        float yU = -0.12 - 0.03 * s;
        float yL = -0.12 - 0.44 * pow(1.0 - s, 0.8);
        if (p.y < yU && p.y > yL) {
          float tooth = 1.0 - abs(2.0 * fract(s * 7.0) - 1.0);
          float th = 0.10 * (1.0 - 0.6 * s);
          bool teeth = p.y > yU - tooth * th || p.y < yL + tooth * th;
          albedo = teeth ? WHITE : vec3(0.30, 0.025, 0.02);
        }
      }
      float eye = length(vec2(p.z + 3.35, p.y - 0.2));
      if (eye < 0.12) albedo = eye < 0.055 ? vec3(0.01) : WHITE;
    }
  }

  // scorched black where it is burning
  float burnN = texture(uNoiseTex, p.xz * 0.21 + p.y * 0.13 + 0.5).r;
  if (uBurn > 0.0) albedo = mix(albedo, vec3(0.012, 0.011, 0.01), uBurn * smoothstep(0.25, 0.75, burnN + uBurn * 0.55 - 0.3));

  float hs = terrainHS(wp.xz).g;
  float sh = smoothstep(-9.0, -1.0, wp.y - hs);
  vec3 moonFlat = normalize(vec3(uMoonDir.x, 0.0, uMoonDir.z));
  float skyK = (0.45 + 0.55 * N.y) * (0.8 + 0.6 * max(dot(N, moonFlat), 0.0));
  vec3 light = uAmbient * skyK * 1.3 + uFogAmbient * 0.45;
  light += uMoonColor * max(dot(N, uMoonDir), 0.0) * sh;

  vec3 toF = uFlashPos - wp;
  float df = length(toF);
  vec3 Lf = toF / df;
  float att = 1.0 / (1.0 + (df * df) / (1500.0 * 1500.0));
  light += uFlashColor * uFlash * (max(dot(N, Lf), 0.0) * 0.85 + 0.15) * att;

  // caught in a searchlight, or under the airfield floodlight
  light += beamLight(wp, N) * 1.3;
  light += lampLight(wp, N) * 1.3;

  vec3 col = albedo * light;

  // wet metal and glass
  vec3 V = normalize(uCamPos - wp);
  col += uMoonColor * pow(max(dot(N, normalize(uMoonDir + V)), 0.0), 60.0) * gloss * sh;
  col += uFlashColor * uFlash * att * pow(max(dot(N, normalize(Lf + V)), 0.0), 60.0) * gloss;
  float rim = pow(1.0 - max(dot(N, V), 0.0), 3.0);
  col += uFogAmbient * rim * 0.35 * gloss;

  if (vKind > 1.5) col = vColor * (0.75 + 0.25 * sin(uTime * 9.0)) * (1.0 - uBurn);
  // glowing patches in the burning metal
  if (uBurn > 0.0) {
    float e = texture(uNoiseTex, p.xz * 0.5 + p.y * 0.4 + uTime * 0.02).g;
    col += vec3(3.2, 0.9, 0.18) * uBurn * smoothstep(0.66, 0.78, e) * (0.6 + 0.4 * sin(uTime * 11.0 + e * 40.0));
  }
  gl_FragColor = vec4(col, 1.0);
}
`,hd=`
varying vec2 vUv;
uniform float uSpin;
uniform vec3 uFogAmbient;
void main() {
  vec2 q = vUv * 2.0 - 1.0;
  float r = length(q);
  if (r > 1.0 || r < 0.18) discard;
  float a = atan(q.y, q.x);
  // three blades smeared into a disc
  float blade = pow(0.5 + 0.5 * cos(a * 3.0 + uSpin), 2.0);
  float alpha = (0.10 + 0.16 * blade) * smoothstep(1.0, 0.9, r);
  float tip = smoothstep(0.9, 0.97, r);
  vec3 col = mix(vec3(0.02) + uFogAmbient * 0.25, vec3(0.5, 0.42, 0.1), tip);
  gl_FragColor = vec4(col, alpha);
}
`;function gd(){let e=new ut,t=Array.from({length:4},()=>new Re),n={uPartM:{value:t},uBroken:{value:0},uBurn:{value:0}},r=new Hn(td(),new Er({uniforms:{...Q,...n},vertexShader:pd,fragmentShader:md,side:2}));r.frustumCulled=!1,e.add(r);let i=new Er({uniforms:{uSpin:{value:0},uFogAmbient:Q.uFogAmbient},vertexShader:`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:hd,transparent:!0,depthWrite:!1,side:2}),a=new Hn(new gr(3.3,3.3),i);a.position.set(0,.14,-4.62),a.frustumCulled=!1,e.add(a);let o=[];for(let e=0;e<3;e++){let t=new ur(.05,1.55,.2);t.translate(0,.85,0),t.rotateZ(e*Math.PI*2/3+.4),o.push(ld(t,[.02,.02,.02]))}let s=new Hn(hl(o),r.material);s.position.copy(a.position),s.visible=!1,e.add(s);let c=new ut;e.add(c);let l=[],u=[];for(let e of[-1,1]){let t=new ut;t.position.set(e*nd[0],nd[1],nd[2]);let n=new fr(.075,.06,rd,7);n.translate(0,-1.2/2,0);let i=new ur(.03,rd*.8,.52);i.translate(e*.11,-.54,0),t.add(new Hn(hl([ld(n,ud),ld(i,[.085,.1,.05])]),r.material));let a=new ut;a.position.set(0,-1.2,0);let o=new fr(id,id,.19,16);o.rotateZ(Math.PI/2);let s=new fr(.15,.15,.21,10);s.rotateZ(Math.PI/2),a.add(new Hn(hl([ld(o,dd),ld(s,fd)]),r.material)),t.add(a),c.add(t),u.push({leg:t,side:e,axis:`z`}),l.push({wheel:a,r:id})}{let e=new ut;e.position.set(...ad);let t=new fr(.05,.04,od,6);t.translate(0,-.38/2,.04),e.add(new Hn(ld(t,ud),r.material));let n=new ut;n.position.set(0,-.38,.08);let i=new fr(sd,sd,.1,12);i.rotateZ(Math.PI/2),n.add(new Hn(ld(i,dd),r.material)),e.add(n),c.add(e),u.push({leg:e,side:0,axis:`x`}),l.push({wheel:n,r:sd})}for(let e of c.children)e.traverse(e=>e.frustumCulled=!1);let d=1,f=e=>{d=e;let t=1-e;for(let{leg:e,side:n,axis:r}of u)r===`z`?e.rotation.z=-n*t*(Math.PI/2):e.rotation.x=-t*(Math.PI/2)*1.05;c.visible=!p&&e>.001},p=!1;return e.visible=!1,{group:e,partM:t,setBroken(e){p=e,n.uBroken.value=+!!e,a.visible=!e&&!s.visible,e&&(s.visible=!1),e||(n.uBurn.value=0),f(d)},setGear:f,get gear(){return d},roll(e){for(let t of l)t.wheel.rotation.x-=e/t.r},stopProp(e){s.visible=e,a.visible=!e&&!p},setBurn(e){n.uBurn.value=e},spin(e,t){i.uniforms.uSpin.value=(i.uniforms.uSpin.value+e*(25+30*t))%(Math.PI*2)}}}var _d=`白帝城 AIRBASE`,vd=`
attribute vec3 aColor;
attribute float aSize;
attribute float aKind;
attribute float aPhase;
uniform float uTime;
uniform float uPx;
varying vec3 vCol;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  float dist = max(-mv.z, 0.1);
  float px = aSize * uPx / dist;
  float k = 1.0;
  // lanterns flicker; the beacon flashes
  if (aKind < 0.5) k = 0.85 + 0.15 * sin(uTime * 7.0 + aPhase * 17.0) * sin(uTime * 3.1 + aPhase * 5.0);
  else if (aKind > 2.5) k = smoothstep(0.75, 0.8, fract(uTime * 0.6 + aPhase)) * smoothstep(1.0, 0.92, fract(uTime * 0.6 + aPhase));
  // far away a light covers less than a pixel: draw it a few pixels across, dimmer, so it never vanishes
  float s = max(px, 3.0);
  vCol = aColor * k * max(px * px / (s * s), 0.2);
  gl_PointSize = s;
  gl_Position = projectionMatrix * mv;
}
`,yd=`
varying vec3 vCol;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(q, q);
  if (r2 > 1.0) discard;
  float a = exp(-r2 * 5.0) + 0.6 * exp(-r2 * 30.0);
  gl_FragColor = vec4(vCol * a, 1.0);
}
`,bd=[.15,.145,.13],xd=[.1,.097,.088],Sd=[.2,.2,.19],Cd=[.08,.085,.09],wd=[.03,.03,.03],Td=[1,.7,.38],Ed=[.9,.18,.06];function Dd(e,t){let n=e.field;if(!n)return null;let{L:r,W:i,U:a,V0:o,V1:s,WALL:c,FORE:l,BAYS:u,UPPER:d,Y2:f,TEMPLE:p}=Fc,m=f-n.y,h=(e,t,r=0,i=new W)=>i.set(n.x+n.dx*e+n.rx*t,n.y+r,n.z+n.dz*e+n.rz*t),g=(e,t)=>{let r=e-n.x,i=t-n.z;return{u:r*n.dx+i*n.dz,v:r*n.rx+i*n.rz}},_=new ut;_.position.set(n.x,n.y,n.z),_.rotation.y=Math.atan2(-n.dz,n.dx),t.add(_),Q.uFieldC.value.set(n.x,n.y,n.z),Q.uFieldD.value.set(n.dx,n.dz);let v=new Sl,y=[],b=(e,t,n,r,i,a=1)=>y.push([e,t,n,r,i,a]),x=-n.y-3;v.box(2*a,.3-x,c,0,x,s-c/2,bd),v.box(2*a,1,.7,0,.3,s-.35,xd);for(let e of[-6,-12])v.box(2*a,.5,.3,0,e,s+.15,xd);for(let e=-a+20;e<=a-20;e+=28){let t=new ur(3,-1-x,2.6);t.translate(e,x+(-1-x)/2,s+1.3),v.add(t,xd)}for(let e of[-1,1]){v.box(16,4-x,16,e*(a+4),x,s-4,bd);for(let t=-2;t<=2;t++)v.box(1.6,1.4,.8,e*(a+4)+t*3.2,4,s+3.6,xd),v.box(.8,1.4,1.6,e*(a+4)+e*7.6,4,s-4+t*3.2,xd);b(e*(a+4),s+4.5,5.5,[2.6,1.9,1.1],1.2,0)}let[S,C]=d,w=d[3],[T,E]=p;v.box(C-S,m+1.2,c,(S+C)/2,-1,w-c/2,bd);for(let e=S+1.5;e<C-1;e+=3.2)Math.abs(e-T)<8||v.box(1.6,1.4,.8,e,m+.2,w-.4,xd);for(let e of[-1,1])v.box(8,m+3.5,8,e>0?C:S,-1,w-4,bd);let D=(m+.2)/70,O=(w-l[3]+0)/70;for(let e=0;e<70;e++)v.box(10,(e+1)*D,Math.abs(O)+.02,T,0,l[3]+(e+.5)*O,bd);for(let e of[-1,1]){v.bar(T+e*5.4,1,l[3],T+e*5.4,m+1.2,w,.8,xd);for(let t=0;t<=70;t+=10){let n=l[3]+t*O,r=t*D+1;v.box(.3,2.2,.3,T+e*5.4,r,n,wd),v.box(.7,.9,.7,T+e*5.4,r+2.2,n,Ed,3),b(T+e*5.4,n,r+2.65,[2.6,.55,.18],1.4,0)}}let k=8.5,A=u[3]-u[2]+10,j=-150,M=[-110,-45,20];for(let e of M){let t=new fr(13,13,A,26,1,!0,Math.PI/2,Math.PI);t.rotateX(Math.PI/2),t.scale(1,k/13,1),t.translate(e,0,j-A/2),v.add(t,Sd);let n=new dr(13,26,0,Math.PI);n.scale(1,k/13,1),n.translate(e,0,j-A),v.add(n,wd),v.box(29,2.4,1.8,e,7.9,j,Sd);for(let t of[-1,1])v.box(2.6,10.3,5,e+t*13.4,0,-151.5,Sd);v.box(1.2,.5,1.2,e,7.1,j-A*.45,Td,4),b(e,j-A*.45,6.9,[2.2,1.7,1],1.3,1)}let N=-420,P=-140;v.box(5,18,5,N,0,P,Sd);for(let e=3;e<17;e+=4)v.box(1,1.2,.12,N,e,-137.48,Td,1.2);v.box(8.4,.4,8.4,N,18,P,Sd),v.box(7.2,3.3,7.2,N,18.4,P,[.95,.7,.36],1.25);for(let[e,t]of[[-3.6,-3.6],[3.6,-3.6],[-3.6,3.6],[3.6,3.6]])v.box(.3,3.3,.3,N+e,18.4,P+t,wd);v.box(8.4,.5,8.4,N,21.7,P,Cd),v.bar(-417.5,22.2,-137.5,-417.5,28,-137.5,.12,wd),v.bar(-422.5,22.2,-142.5,-422.5,25.5,-142.5,.1,wd),v.bar(-423.2,23.5,P,-419.5,23.5,P,.12,wd),b(-417.5,-137.5,28.3,[3.5,3.4,3],2.6,3);let ee=-388,F=-147;v.box(40,7,24,ee,0,F,[.17,.17,.16]),v.box(41,.4,25,ee,7,F,Cd);let I=0;for(let e=-405;e<=-371;e+=4.2)for(let t of[1.3,4.3])v.box(2.2,1.3,.12,e,t,-134.98,Td,I++%3==1?.2:1.1);v.box(3,2.6,.12,-380,0,-134.96,[.05,.04,.03]);let te=new _r(3.4,16,10,0,Math.PI*2,0,Math.PI/2);te.translate(-378,8.6,-150),v.add(te,[.32,.32,.31]),v.box(4,1.2,4,-378,7.4,-150,Sd);for(let e of[-280,-220]){v.box(50,8,22,e,0,-154,[.16,.165,.16]);for(let t of[-1,1]){let n=new ur(51,.3,11.8);n.rotateX(t*.18),n.translate(e,9,-154+t*5.6),v.add(n,Cd)}v.box(36,6.6,.12,e,0,-142.95,[.13,.09,.05],.6);for(let t=-1;t<=1;t+=2)v.box(1.4,.9,.12,e+t*21.5,4.2,-142.95,Td,1.1)}let L=new fr(.3,.3,.9,10);for(let e=0;e<4;e++)for(let t=0;t<3;t++){let n=L.clone();n.translate(-186+e*.7,.45,-161+t*.7),v.add(n,e===3&&t===1?[.09,.025,.02]:[.06,.07,.04])}let ne=[[-400,-100],[-250,-100],[-80,-124]];for(let[e,t]of ne)v.bar(e,0,t,e,14,t,.25,wd),v.box(1.8,.8,1,e,13.6,t+.3,wd),v.box(1.4,.5,.1,e,13.75,t+.85,[1,.88,.65],6),b(e,t+.9,14,[4,3.3,2.2],3,1);h(ne[1][0],ne[1][1]+10,13.5,Q.uFieldLampPos.value),Q.uFieldLampColor.value.set(1,.82,.58).multiplyScalar(.8);let re=-455;v.bar(re,0,-40,re,7,-40,.12,[.3,.3,.28]),_.add(v.mesh());let R=new pr(.5,3.4,12,1,!0);R.rotateZ(-Math.PI/2),R.translate(1.7,0,0);let z=new Sl().add(R,[.55,.16,.04],.15).mesh();z.position.set(re,6.8,-40),z.rotation.order=`YZX`,_.add(z);let B=[];for(let[e,n]of[[-280,-114],[-220,-114],[M[1],-164]]){let r=gd();r.setGear(1),r.stopProp(!0);let i=cd.threePoint;r.group.position.copy(h(e,n,cd.heightAt(i)));let a=new ge().setFromAxisAngle(new W(0,1,0),_.rotation.y+Math.PI);a.multiply(new ge().setFromAxisAngle(new W(1,0,0),i)),r.group.quaternion.copy(a),r.group.visible=!0,t.add(r.group),B.push(r)}let ie=i/2+2;for(let e=-r/2;e<=r/2+.1;e+=50)for(let t of[-1,1])b(e,t*ie,.5,[3,2.4,1.5],1.2,1);for(let e=-i/2;e<=i/2+.1;e+=5)b(-r/2-4,e,.4,[.35,2.6,.9],1,1),b(r/2+4,e,.4,[2.8,.25,.15],1,1);for(let[e,t]of[[-440,-65],[-180,-65],[20,-120]])for(let n=t+16;n<=-i/2-14;n+=12)for(let t of[-1,1])b(e+t*12.5,n,.4,[.3,.6,3],.8,1);let ae=[],oe=[],se=[],ce=[],le=[];for(let[e,t,n,r,i,a]of y){let o=h(e,t,n);ae.push(o.x,o.y,o.z),oe.push(...r),se.push(i),ce.push(a),le.push(Math.random())}let V=new vn;V.setAttribute(`position`,new Y(ae,3)),V.setAttribute(`aColor`,new Y(oe,3)),V.setAttribute(`aSize`,new Y(se,1)),V.setAttribute(`aKind`,new Y(ce,1)),V.setAttribute(`aPhase`,new Y(le,1));let H=new Er({uniforms:{uTime:Q.uTime,uPx:{value:800}},vertexShader:vd,fragmentShader:yd,transparent:!0,depthWrite:!1,blending:2}),ue=new ir(V,H);ue.frustumCulled=!1,t.add(ue);let de=h(-r/2+25,0,0),fe=new W(n.dx,0,n.dz),pe=new U,me=(e,t,[n,r,i,a])=>Math.hypot(Math.max(n-e,e-r,0),Math.max(i-t,t-a,0));return{name:_d,field:n,start:de,heading:fe,y:n.y,toWorld:h,toLocal:g,onField(e,t,n=0){let{u:r,v:i}=g(e,t);return Math.abs(r)<=a-n&&i>=o+n&&i<=s-n},distTo(e,t){let{u:n,v:r}=g(e,t);return me(n,r,[-a,a,o,s])},keepClear(e,t){let{u:n,v:c}=g(e,t);if(me(n,c,[-a,a,o,s])<30||me(n,c,l)<15||me(n,c,u)<15)return!0;let d=Math.abs(n)-r/2;return d>0&&d<700&&Math.abs(c)<i+.15*d},update(e,t,r){H.uniforms.uPx.value=r/(2*Math.tan(t.fov*Math.PI/360));let i=Q.uWind.value,a=i.x*n.dx+i.y*n.dz,o=i.x*n.rx+i.y*n.rz,s=Math.min(1,Math.hypot(a,o)/12);pe.set(Math.atan2(-o,a),-(1-s)*1.1);let c=Math.atan2(Math.sin(pe.x-z.rotation.y),Math.cos(pe.x-z.rotation.y));z.rotation.y+=Math.max(-e*.6,Math.min(e*.6,c)),z.rotation.z=pe.y+Math.sin(performance.now()*.004)*.05*s}}}var Od=180/Math.PI,kd=Math.PI/180,Ad=1/60,jd=9.81,Md={StallSpeed:30,CruiseSpeed:88,MaxSpeed:132,BoostSpeed:150,DiveLimit:185,EngineAccel:9,BrakeDecel:12,ThrottleRate:1.2,TurnBleed:1.2,PeakPitchRate:55,CornerSpeed:85,PeakRollRate:150,PeakYawRate:15,PitchResponse:.15,RollResponse:.08,YawResponse:.3,Grip:6,MaxG:8,BankGravity:2.5,RollKeepsNoseAbove:90,MaxAutoBank:70,BankGain:4,AutoLevelRate:60,AutoPull:2.5,StallAuthority:.3,StallHysteresis:8,StallNoseDrop:1.5,HighGMultiplier:1.6,HighGBleed:18,CeilingStart:650,CeilingEnd:900,CollisionRadius:2,GroundWarningTime:3},Nd={EnergyStrength:.6,bStallEnabled:!0,AutoLevelScale:1},Pd=(e,t,n)=>Math.min(n,Math.max(t,e)),Fd=(e,t,n)=>e+(t-e)*n,Id=(e,t,n)=>{let r=Pd((n-e)/(t-e),0,1);return r*r*(3-2*r)},Ld=(e,t,n,r)=>e+(t-e)*(1-Math.exp(-n/Math.max(r,1e-4))),Rd=(e,t,n,r)=>{let i=t-e,a=r*n;return Math.abs(i)<=a?t:e+Math.sign(i)*a},zd=e=>(e%=360,e>180&&(e-=360),e<-180&&(e+=360),e);function Bd(e,t,n,r){let i=Md.CornerSpeed;if(t<=i)return e*Fd(n,1,i>0?Pd(t/i,0,1):1);let a=Math.max(Md.DiveLimit-i,1);return e*Fd(1,r,Pd((t-i)/a,0,1))}var Vd=e=>Bd(Md.PeakPitchRate,e,.3,.55),Hd=e=>Bd(Md.PeakRollRate,e,.4,.7),Ud=e=>Bd(Md.PeakYawRate,e,.5,.8),Wd=new W,Gd=new W,Kd=new W,qd=new W,Jd=new W,Yd=new W,Xd=new W,Zd=new W(0,-1,0),Qd=new ge,$d=new ge,ef=new Ke(0,0,0,`YXZ`),tf=(e,t)=>t.set(0,0,-1).applyQuaternion(e),nf=(e,t)=>t.set(0,1,0).applyQuaternion(e),rf=(e,t)=>t.set(1,0,0).applyQuaternion(e);function af(e){return Math.atan2(-rf(e,Wd).y,nf(e,Gd).y)*Od}function of(e,t){return{location:e.clone(),rotation:t.clone().normalize(),velocityDir:tf(t,new W),speed:Md.CruiseSpeed,rates:{roll:0,pitch:0,yaw:0},throttleLevel:(Md.CruiseSpeed/Md.MaxSpeed)**2,loadFactor:1,stalled:!1,highG:!1,crashed:!1}}function sf(e,t,n){let r=Md,i=Nd,a=e.speed,o=(r.CruiseSpeed/r.MaxSpeed)**2,s=(r.BoostSpeed/r.MaxSpeed)**2,c=t.throttle>=0?Fd(o,s,t.throttle):Fd(o,0,-t.throttle);e.throttleLevel=Rd(e.throttleLevel,c,n,r.ThrottleRate),e.highG=!!t.highG&&t.pitch>.3&&a>r.StallSpeed;let l=Vd(a),u=Hd(a),d=Ud(a);if(e.stalled&&(l*=r.StallAuthority,u*=r.StallAuthority),e.highG&&(l*=r.HighGMultiplier),a>1){let t=(a/Math.max(r.StallSpeed,1))**2,n=Math.min(r.MaxG,t)*(e.highG?r.HighGMultiplier:1);l=Math.min(l,n*jd/a*Od)}let f=t.pitch*l,p=t.yaw*d;tf(e.rotation,Kd);let m=af(e.rotation),h=1-Id(.7,.95,Math.abs(Kd.y)),g=Math.abs(t.roll)<.05,_=zd((g?0:t.roll*r.MaxAutoBank)-m),v=g?r.AutoLevelRate*i.AutoLevelScale*h:u,y=Pd(_*r.BankGain,-v,v);if(!g&&a>1){let e=Pd(Math.abs(m),0,85)*kd,t=jd/a*Math.sin(e)*Math.tan(e)*Od;f=Pd(f+r.AutoPull*t,-l,l)}if(e.rates.roll=Ld(e.rates.roll,y,n,r.RollResponse),e.rates.pitch=Ld(e.rates.pitch,f,n,r.PitchResponse),e.rates.yaw=Ld(e.rates.yaw,p,n,r.YawResponse),ef.set(e.rates.pitch*n*kd,-e.rates.yaw*n*kd,-e.rates.roll*n*kd,`YXZ`),e.rotation.multiply(Qd.setFromEuler(ef)).normalize(),a>1&&r.BankGravity>0){tf(e.rotation,qd);let t=Math.sqrt(Math.max(0,1-qd.y*qd.y)),i=Math.sin(af(e.rotation)*kd),o=1-Pd(Math.abs(e.rates.roll)/Math.max(r.RollKeepsNoseAbove,1),0,1),s=r.BankGravity*o*jd/Math.max(a,10)*i*i*t;Jd.crossVectors(qd,Zd),s>0&&Jd.lengthSq()>1e-8&&e.rotation.premultiply(Qd.setFromAxisAngle(Jd.normalize(),s*n)).normalize()}e.loadFactor=a*e.rates.pitch*kd/jd+nf(e.rotation,Wd).y;let b=1-Pd((e.location.y-r.CeilingStart)/Math.max(r.CeilingEnd-r.CeilingStart,1),0,1),x=r.EngineAccel*(e.throttleLevel*b-(a/r.MaxSpeed)**2)-r.TurnBleed*Math.max(e.loadFactor-1,0)-jd*i.EnergyStrength*e.velocityDir.y;t.throttle<0&&(x-=r.BrakeDecel*-t.throttle),e.highG&&(x-=r.HighGBleed);let S=Pd(a+x*n,0,r.DiveLimit);i.bStallEnabled||(S=Math.max(S,r.StallSpeed)),i.bStallEnabled?!e.stalled&&S<r.StallSpeed?e.stalled=!0:e.stalled&&S>r.StallSpeed+r.StallHysteresis&&(e.stalled=!1):e.stalled=!1,Yd.copy(e.velocityDir).multiplyScalar(S);let C=r.StallSpeed*1.5,w=Pd((C-S)/C,0,1)*(e.stalled?2:1);Yd.y-=jd*w*n,Yd.lengthSq()>1e-8?Xd.copy(Yd).normalize():Xd.copy(Kd);let T=1-Math.exp(-r.Grip*(e.stalled?.2:1)*n);if(Qd.setFromUnitVectors(Xd,Kd),Xd.applyQuaternion($d.identity().slerp(Qd,T)).normalize(),e.stalled){let t=1-Math.exp(-r.StallNoseDrop*n);Qd.setFromUnitVectors(Kd,Xd),e.rotation.premultiply($d.identity().slerp(Qd,t)).normalize()}e.velocityDir.copy(Xd),e.speed=S,e.location.addScaledVector(Xd,S*n)}function cf(e,t){if(e.crashed)return;let n=Ad/2;for(let r=0;r<2;r++)sf(e,t,n)}var lf=Math.PI/180,uf=(e,t,n)=>Math.min(n,Math.max(t,e)),df=(e,t,n)=>{let r=uf((n-e)/(t-e),0,1);return r*r*(3-2*r)},ff={Distance:14,Height:3.5,BoostExtraDistance:4,BrakeCloserDistance:2.5,RollFollow:.3,LevelRate:2.5,LevelPauseAbovePitchRate:20,RotationLag:.12,MaxLagAngle:25,AimAheadDistance:60,BaseFOV:75,BoostFOV:85,CockpitOffset:new W(0,1.25,-.35),FreeLookReturn:4},pf=7,mf=1,hf=.06,gf=3.6,_f=34,vf=47,yf=75,bf=e=>Math.max(cd.heightAt(e),-(cd.tailY*Math.cos(e))+cd.tailZ*Math.sin(e)),xf=new W(0,1,0),Sf=new W,Cf=new W,wf=new W,Tf=new W,Ef=new W,Df=new W,Of=new ge,kf=new ge,Af=new ge,jf=new Re,Mf=new Ke(0,0,0,`YXZ`),Nf=new W,Pf=class{constructor(e,t,n,r,i){this.camera=e,this.terrain=t,this.audio=i,this.active=!1,this.plane=gd(),n.add(this.plane.group),this.state=null,this.acc=0,this.keys={},this.look=new U,this.lookHeld=new U,this.cockpit=!1,this.vel=new W,this.prevCam=new W,this.camUp=new W(0,1,0),this.prevForward=new W,this.smoothed=new ge,this.hasUp=!1,this.hasSmoothed=!1,this.respawnIn=0,this.damage=0,this.hud={speed:0,alt:0,throttle:`CRUISE`,warn:``},this.onRespawn=()=>{},this.wreck=!1,this.wreckFade=!1,this.wreckFocus=new W,this.wreckLook=new W,this.wreckCam=new W,this.wreckOffset=new W,this.wreckT=0,this.wreckWhy=``,this.onWreck=()=>{},this.wreckDone=()=>!1,this.airfield=null,this.ground=null,this.gearK=1,this.airT=0,window.addEventListener(`keydown`,e=>{e.target instanceof HTMLInputElement||(this.keys[e.code]=!0,this.active&&e.code===`KeyV`&&(this.cockpit=!this.cockpit),this.active&&(e.code===`Space`||e.code.startsWith(`Arrow`))&&e.preventDefault())}),window.addEventListener(`keyup`,e=>this.keys[e.code]=!1),window.addEventListener(`blur`,()=>this.keys={}),this.touch=null;let a=null,o=0,s=0;r.addEventListener(`pointerdown`,e=>{a===null&&(a=e.pointerId,o=e.clientX,s=e.clientY)});let c=e=>{e.pointerId===a&&(a=null,this.lookHeld.set(0,0))};window.addEventListener(`pointerup`,c),window.addEventListener(`pointercancel`,c),r.addEventListener(`pointermove`,e=>{if(e.pointerId!==a)return;let t=e.clientX-o,n=e.clientY-s;o=e.clientX,s=e.clientY,this.active&&(this.lookHeld.x=uf(this.lookHeld.x+t*.3,-160,160),this.lookHeld.y=uf(this.lookHeld.y-n*.25,-60,60))})}spawn(e){this.airfield?this.spawnOnRunway():this.spawnAir(e??Math.atan2(this.camera.position.z,this.camera.position.x))}spawnOnRunway(){let e=this.airfield,t=Math.atan2(-e.heading.x,-e.heading.z),n=cd.threePoint,r=e.start.clone();r.y=e.y+bf(n),this.state=of(r,new ge().setFromEuler(Mf.set(n,t,0,`YXZ`))),this.state.speed=0,this.state.velocityDir.copy(e.heading),this.state.throttleLevel=hf,this.ground={yaw:t,a:n,parked:!0,run:!1},this._reset()}spawnAir(e,t=125){let n=Tc(e),r=Tc(e+.03),i=new W(Math.cos(e)*n,t,Math.sin(e)*n),a=new W(Math.cos(e+.03)*r,t,Math.sin(e+.03)*r),o=new ge().setFromRotationMatrix(jf.lookAt(i,a,xf));this.state=of(i,o),this.ground=null,this.airT=99,this._reset()}_reset(){this.acc=0,this.hasUp=!1,this.hasSmoothed=!1,this.look.set(0,0),this.respawnIn=0,this.damage=0,this.wreck=!1,this.plane.setBroken(!1),this.gearK=+!!this.ground,this.plane.setGear(this.gearK)}enter(){let e=this.camera.position;this.spawn(),this.active=!0,this.plane.group.visible=!0,this.prevCam.copy(e)}exit(){this.active=!1,this.wreck=!1,this.respawnIn=0,this.plane.group.visible=!1,this.camera.up.set(0,1,0),this.camera.fov=58,this.camera.updateProjectionMatrix(),this.audio?.setEngine(!1,0)}_readInput(){let e=this.keys,t=t=>+!!e[t],n=this.touch,r=Math.max(t(`ShiftLeft`),t(`ShiftRight`),n&&n.boost?1:0),i=Math.max(t(`Space`),t(`KeyB`),n&&n.brake?1:0),a=r>.5&&i>.5;return{pitch:uf(t(`KeyS`)+t(`ArrowDown`)-t(`KeyW`)-t(`ArrowUp`)+(n?n.y:0),-1,1),roll:uf(t(`KeyD`)+t(`ArrowRight`)-t(`KeyA`)-t(`ArrowLeft`)+(n?n.x:0),-1,1),yaw:t(`KeyE`)-t(`KeyQ`),throttle:a?0:r-i,highG:a}}update(e){let t=this.state,n=this.camera,r=this._readInput();if(this.respawnIn>0)this.respawnIn-=e,this.wreck&&!this.wreckFade&&(this.respawnIn<mf||this.wreckDone())&&(this.wreckFade=!0,this.respawnIn=Math.min(this.respawnIn,mf),this.onRespawn(!0,this.wreckWhy)),this.respawnIn<=0&&(this.spawn(Math.atan2(t.location.z,t.location.x)),this.onRespawn(!1));else{for(this.acc=Math.min(this.acc+e,.1);this.acc>=Ad&&(this.acc-=Ad,!t.crashed);)this.ground?this._groundStep(t,r,Ad):(cf(t,r),this.airT+=Ad,this._groundCheck(t));let i=Math.hypot(t.location.x,t.location.z)>3950;if(!i&&t.crashed){let e=this.damage>=100;this.wreckWhy=e?`Shot down`:`Terrain`,this.wreck=!0,this.wreckFade=!1,this.respawnIn=pf,this.wreckCam.copy(n.position),this.cockpit&&!this.keys.KeyX&&(tf(t.rotation,Sf),this.wreckCam.copy(t.location).addScaledVector(Sf,-24).addScaledVector(xf,7)),Sf.copy(t.velocityDir).setY(0),Sf.lengthSq()<1e-4&&Sf.set(0,0,-1),Sf.normalize(),Ef.crossVectors(Sf,xf);let r=Ef.dot(Df.copy(this.wreckCam).sub(t.location))>=0?1:-1;this.wreckOffset.copy(Sf).multiplyScalar(-16).addScaledVector(Ef,r*30).addScaledVector(xf,10),this.wreckT=0,this.wreckLook.copy(t.location),this.wreckFocus.copy(t.location),this.onWreck(t,e)}else i&&(this.respawnIn=.9,this.onRespawn(!0,`Leaving the gorge`))}let i=this.state;this.wreck||(this.plane.group.position.copy(i.location),this.plane.group.quaternion.copy(i.rotation),this.plane.spin(e,i.throttleLevel),this.ground&&this.plane.roll(i.speed*e),this._gear(e)),this.wreck?this._wreckCamera(e):this.cockpit&&!this.keys.KeyX?this._cockpitCamera(e):this._chaseCamera(e),e>0&&this.vel.copy(n.position).sub(this.prevCam).divideScalar(e),this.prevCam.copy(n.position);let a=this.hud;a.speed=i.speed*3.6,a.alt=i.location.y,a.throttle=r.highG?`HIGH-G`:r.throttle>0?`BOOST`:r.throttle<0?`BRAKE`:`CRUISE`,a.warn=``,a.prompt=``,a.gear=!this.ground&&this.gearK>.05?this.gearK>.95?`GEAR DOWN`:`GEAR`:``;let o=this.ground,s=this.touch&&this.touch.enabled;o&&!this.wreck&&(a.throttle=o.parked?`BRAKES ON`:r.throttle<0?`BRAKE`:o.run?`FULL POWER`:`IDLE`,o.parked||!o.run&&i.speed<1?a.prompt=`${this.airfield?this.airfield.name+` · `:``}${s?`BOOST TO TAKE OFF`:`SHIFT TO TAKE OFF`}`:o.run&&i.speed>30&&(a.prompt=s?`PULL BACK TO LIFT OFF`:`S TO LIFT OFF`));let c=this.airfield,l=c&&this.gearK>.5&&c.onField(i.location.x,i.location.z)&&i.location.y<c.y+40;if(this.wreck||o||l)a.warn=``;else if(i.stalled)a.warn=`STALL`;else for(let e=.5;e<=Md.GroundWarningTime;e+=.5)if(Ef.copy(i.location).addScaledVector(i.velocityDir,i.speed*e),Ef.y<Math.max(this.terrain.sample(Ef.x,Ef.z),0)+6){a.warn=`PULL UP`;break}this.audio?.setEngine(!this.wreck,i.throttleLevel,i.speed/Md.MaxSpeed)}_groundStep(e,t,n){let r=this.ground,i=(Md.BoostSpeed/Md.MaxSpeed)**2;t.throttle>.5&&(r.parked=!1,r.run=!0),t.throttle<0&&(r.run=!1);let a=t.throttle<0||r.parked,o=r.run?i:hf,s=Md.ThrottleRate*n;e.throttleLevel+=uf(o-e.throttleLevel,-s,s);let c=e.speed,l=gf*(e.throttleLevel/i)-.5*(c/40)**2-(c>.05?.25:0)-(a?5:0);c=r.parked?0:Math.max(0,c+l*n);let u=uf(t.roll+t.yaw,-1,1);r.yaw-=u*(22-14*df(0,40,c))*lf*uf(Math.max(c,r.run?1.5:0)/3,0,1)*n;let d=Math.max(t.pitch,0),f=cd.threePoint+(.035-cd.threePoint)*df(9,24,c);f=uf(f+d*.2*df(24,32,c),0,.24),r.a+=(f-r.a)*(1-Math.exp(-n/.35));let p=-Math.sin(r.yaw),m=-Math.cos(r.yaw),h=e.location.x+p*c*n,g=e.location.z+m*c*n;c<15&&(this.terrain.sample(h,g)<.3||this.terrain.flatness(h,g)<.96)?c=0:(e.location.x=h,e.location.z=g);let _=this.terrain.sample(e.location.x,e.location.z);if(e.location.y=Math.max(_,0)+bf(r.a),e.speed=c,e.velocityDir.set(p,0,m),e.rotation.setFromEuler(Mf.set(r.a,r.yaw,0,`YXZ`)),e.rates.roll=e.rates.pitch=e.rates.yaw=0,e.stalled=!1,_<.3||this.terrain.flatness(e.location.x,e.location.z)<.96)e.crashed=!0;else if(c>=_f&&d>.25&&r.a>.09||r.run&&c>=vf){let t=.06;e.rotation.setFromEuler(Mf.set(r.a+.02,r.yaw,0,`YXZ`)),e.velocityDir.set(p*Math.cos(t),Math.sin(t),m*Math.cos(t)),this.ground=null,this.airT=0}}_groundCheck(e){let t=this.airfield,n=e.location.x,r=e.location.z;if(t&&t.onField(n,r,2)){tf(e.rotation,Sf);let n=Math.asin(uf(Sf.y,-1,1)),r=this.gearK>.95,i=r?bf(Math.max(n,0)):.8;if(e.location.y>=t.y+i)return;if(r&&this.airT<1.5)e.location.y=t.y+i,e.velocityDir.y<0&&e.velocityDir.setY(0).normalize();else if(r&&e.velocityDir.y>-.13&&Math.abs(af(e.rotation))<15&&n>-.06&&n<.3&&e.speed<yf){let r=uf(n,0,cd.threePoint);this.ground={yaw:Math.atan2(-Sf.x,-Sf.z),a:r,parked:!1,run:!1},e.speed*=Math.hypot(e.velocityDir.x,e.velocityDir.z),e.location.y=t.y+bf(r)}else e.crashed=!0;return}let i=Math.max(this.terrain.sample(n,r),0);e.location.y<i+Md.CollisionRadius&&(e.crashed=!0)}_gear(e){let t=this.state,n=this.airfield,r=+(this.gearK>.5);if(this.ground)r=1;else{let e=t.location.y-Math.max(this.terrain.sample(t.location.x,t.location.z),0);n&&n.distTo(t.location.x,t.location.z)<1500&&e<60&&t.speed<70&&t.velocityDir.y<.02?r=1:this.airT>1&&e>8&&(r=0)}this.gearK+=uf(r-this.gearK,-e/2.5,e/2.5),this.plane.setGear(this.gearK)}_wreckCamera(e){let t=this.camera;this.wreckT+=e;let n=Math.min(1,this.wreckT/3);Ef.copy(this.wreckOffset).multiplyScalar(1+.6*n),Ef.add(this.wreckFocus),this.wreckCam.lerp(Ef,1-Math.exp(-2.2*e));let r=Math.max(this.terrain.sample(this.wreckCam.x,this.wreckCam.z),0)+3;this.wreckCam.y<r&&(this.wreckCam.y=r),t.position.copy(this.wreckCam),this.wreckLook.lerp(this.wreckFocus,1-Math.exp(-5*e)),t.up.lerp(xf,1-Math.exp(-1.5*e)).normalize(),t.lookAt(this.wreckLook)}_lookOffset(e){let t=1-Math.exp(-ff.FreeLookReturn*e);this.look.x+=(this.lookHeld.x-this.look.x)*t,this.look.y+=(this.lookHeld.y-this.look.y)*t;let n=this.keys.KeyX?180:0;return Mf.set(this.look.y*lf,-(this.look.x+n)*lf,0,`YXZ`),Af.setFromEuler(Mf)}_chaseCamera(e){let t=this.state,n=this.camera;tf(t.rotation,Sf),nf(t.rotation,Cf),this.hasUp||=(Math.abs(Sf.y)<.95?this.camUp.copy(xf).addScaledVector(Sf,-Sf.y).normalize():this.camUp.copy(Cf),this.prevForward.copy(Sf),!0),this.camUp.applyQuaternion(kf.setFromUnitVectors(this.prevForward,Sf)),this.prevForward.copy(Sf),this.camUp.addScaledVector(Sf,-this.camUp.dot(Sf)),this.camUp.lengthSq()<1e-8?this.camUp.copy(Cf):this.camUp.normalize();let r=1-uf(Math.abs(t.rates.pitch)/Math.max(ff.LevelPauseAbovePitchRate,1),0,1),i=1-df(.8,.95,Math.abs(Sf.y)),a=ff.LevelRate*r*i;if(a>0){wf.copy(xf).addScaledVector(Sf,-Sf.y).normalize();let n=ff.RollFollow*90*Math.sin(af(t.rotation)*lf);Tf.copy(wf).applyAxisAngle(Sf,n*lf);let r=Math.atan2(Sf.dot(Ef.crossVectors(this.camUp,Tf)),this.camUp.dot(Tf));this.camUp.applyAxisAngle(Sf,r*(1-Math.exp(-a*e)))}Of.setFromRotationMatrix(jf.lookAt(Nf,Sf,this.camUp)),Of.multiply(this._lookOffset(e)),this.hasSmoothed||=(this.smoothed.copy(Of),!0),this.smoothed.slerp(Of,1-Math.exp(-e/Math.max(ff.RotationLag,1e-4))).normalize();let o=this.smoothed.angleTo(Of)/lf;o>ff.MaxLagAngle&&(kf.copy(Of).slerp(this.smoothed,ff.MaxLagAngle/o),this.smoothed.copy(kf).normalize());let s=Md,c=t.speed>=s.CruiseSpeed?uf((t.speed-s.CruiseSpeed)/Math.max(s.BoostSpeed-s.CruiseSpeed,1),0,1):-uf((s.CruiseSpeed-t.speed)/Math.max(s.CruiseSpeed-s.StallSpeed,1),0,1),l=ff.Distance+(c>0?c*ff.BoostExtraDistance:c*ff.BrakeCloserDistance),u=ff.BaseFOV+Math.max(c,0)*(ff.BoostFOV-ff.BaseFOV);n.position.copy(Ef.set(0,ff.Height,l).applyQuaternion(this.smoothed)).add(t.location),Df.set(0,0,-ff.AimAheadDistance).applyQuaternion(this.smoothed).add(t.location);let d=Math.max(this.terrain.sample(n.position.x,n.position.z),0)+1.5;n.position.y<d&&(n.position.y=d),n.up.set(0,1,0).applyQuaternion(this.smoothed),n.lookAt(Df),Math.abs(n.fov-u)>.01&&(n.fov=u,n.updateProjectionMatrix())}_cockpitCamera(e){let t=this.state,n=this.camera;this.hasUp=!1,this.hasSmoothed=!1,n.position.copy(Ef.copy(ff.CockpitOffset).applyQuaternion(t.rotation)).add(t.location),n.quaternion.copy(t.rotation).multiply(this._lookOffset(e)),Math.abs(n.fov-ff.BaseFOV)>.01&&(n.fov=ff.BaseFOV,n.updateProjectionMatrix())}};function Ff({onFly:e,onCamera:t,onView:n,onStrike:r,onEnable:i}){let a=(e,t)=>{try{e.setPointerCapture(t)}catch{}},o={x:0,y:0,boost:!1,brake:!1,enabled:!1},s=document.createElement(`div`);s.id=`touch`,s.innerHTML=`
    <div id="stick"><div id="knob"></div></div>
    <div id="pads">
      <button data-act="strike" class="small">&#9889;</button>
      <button data-act="camera" class="small walk">CAM</button>
      <button data-act="view" class="small fly">VIEW</button>
      <button data-act="fly" class="small"><span class="walk">FLY</span><span class="fly">EXIT</span></button>
      <button data-hold="brake" class="big fly">BRAKE</button>
      <button data-hold="boost" class="big fly">BOOST</button>
    </div>`,document.body.appendChild(s);let c=()=>{o.enabled||(o.enabled=!0,document.body.classList.add(`touch`),i?.())};window.matchMedia?.(`(pointer: coarse)`).matches&&c(),window.addEventListener(`touchstart`,c,{passive:!0});let l=s.querySelector(`#stick`),u=s.querySelector(`#knob`),d=null,f=e=>{let t=l.getBoundingClientRect(),n=t.width/2,r=(e.clientX-(t.left+n))/(n*.8),i=(e.clientY-(t.top+n))/(n*.8),a=Math.hypot(r,i);a>1&&(r/=a,i/=a),o.x=r,o.y=i,u.style.transform=`translate(${r*n*.6}px, ${i*n*.6}px)`},p=e=>{e.pointerId===d&&(d=null,o.x=o.y=0,u.style.transform=``)};l.addEventListener(`pointerdown`,e=>{d=e.pointerId,a(l,e.pointerId),f(e),e.preventDefault()}),l.addEventListener(`pointermove`,e=>e.pointerId===d&&f(e)),l.addEventListener(`pointerup`,p),l.addEventListener(`pointercancel`,p);let m={fly:e,camera:t,view:n,strike:r};for(let e of s.querySelectorAll(`button`))if(e.addEventListener(`contextmenu`,e=>e.preventDefault()),e.dataset.act)e.addEventListener(`click`,()=>m[e.dataset.act]?.());else{let t=t=>n=>{o[e.dataset.hold]=t,e.classList.toggle(`held`,t),n.preventDefault()};e.addEventListener(`pointerdown`,n=>{a(e,n.pointerId),t(!0)(n)}),e.addEventListener(`pointerup`,t(!1)),e.addEventListener(`pointercancel`,t(!1))}return o}var If=document.getElementById(`scene`),Lf=document.getElementById(`loader`),Rf=document.getElementById(`bar`),zf=document.getElementById(`load-text`),Bf=document.getElementById(`hint`),Vf=document.getElementById(`hud`),Hf=document.getElementById(`fade`),Uf=2,Wf=document.getElementById(`hit`),Gf={Low:{ratio:.7,steps:20},Medium:{ratio:1,steps:30},High:{ratio:1.5,steps:40}},Kf=()=>new Promise(e=>{let t=new MessageChannel;t.port1.onmessage=()=>e(),t.port2.postMessage(0)});function qf(e,t){Rf.style.width=`${Math.round(e*100)}%`,t&&(zf.textContent=t)}async function Jf(){let e=new Is({canvas:If,antialias:!1,powerPreference:`high-performance`});e.setClearColor(0,1);let t=new yt,n=new yt,r=new ri(58,window.innerWidth/window.innerHeight,.5,14e3);qf(.03,`Gathering clouds`),await Kf(),Q.uNoiseTex.value=vc(512),qf(.08),await Kf(),Q.uNoise3D.value=yc(64),qf(.14,`Carving the gorge`),await Kf();let i=await Bc(e=>qf(.14+e*.83));t.add(i.group),t.add(Jc()),qf(.985,`Raising the temple`),await Kf(),i.site&&t.add(Nl(i.site)),qf(.986,`Laying the runway at Baidicheng`),await Kf();let a=Dd(i,t),o=new ul,s=new ll(i,n,o);qf(.988,`Manning the searchlights`),await Kf();let c=Fu(i,t,n,s.depthU,o,a),l=Xu(i,n,s.depthU,o,r);qf(.992,`Planting the forest`),await Kf();let u=Hl(i,{clearings:c.clearings,keepClear:a?(e,t)=>a.keepClear(e,t):null});t.add(u.group);let d=new ml(r,i,If),f=new Pf(r,i,t,If,o);f.airfield=a,f.onRespawn=(e,t)=>{Hf.classList.toggle(`on`,e),e?Hf.textContent=t===`Terrain`?``:t:l.endWreck()},f.wreckFocus=l.focus,f.wreckDone=()=>l.downFor>l.watchFor,f.onWreck=(e,t)=>{t?l.shootDown(f.plane,e):l.crash(f.plane,e),O=t?1:.7,k=1.4};let p={quality:`High`,moon:1,exposure:1.15,sound:!0,camera:`Cinematic`},m=new Gs(e),h=new Qc(t,r,n,{steps:Gf[p.quality].steps});m.addPass(h);let g=new qs(new U(window.innerWidth,window.innerHeight),.4,.55,1);m.addPass(g);let _=new Hs($c);m.addPass(_);function v(){let t=Gf[p.quality],n=window.devicePixelRatio||1,i=t.ratio>1?Math.min(n,t.ratio):Math.min(n,1)*t.ratio;e.setPixelRatio(i),e.setSize(window.innerWidth,window.innerHeight,!1),m.setPixelRatio(i),m.setSize(window.innerWidth,window.innerHeight),r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),s.setDepth(h.depthTex,h.size.x,h.size.y)}window.addEventListener(`resize`,v),v();function y(){let e=p.moon;Q.uMoonColor.value.set(.48,.56,.72).multiplyScalar(e),Q.uAmbient.value.set(.055,.07,.095).multiplyScalar(.55+.45*e),Q.uFogAmbient.value.set(.075,.093,.12).multiplyScalar(.6+.4*e)}y();let b=new oc({title:`Weather`});b.add(s.params,`rain`,0,1,.01).name(`Rain`),b.add(s.params,`mist`,0,2,.01).name(`Mist`),b.add(s.params,`wind`,0,1,.01).name(`Wind`),b.add(s.params,`lightning`,0,1,.01).name(`Lightning`),b.add(p,`moon`,0,2,.01).name(`Moonlight`).onChange(y),b.add({strike:()=>s.strike(r,!0)},`strike`).name(`Strike lightning (L)`);let x=b.addFolder(`View`),S=x.add(p,`camera`,[`Cinematic`,`Free`,`Fly`]).name(`Camera (C / F)`).onChange(e=>C(e));x.add(d,`cineSpeed`,5,120,1).name(`Drift speed`),x.add(p,`exposure`,.5,2.5,.01).name(`Exposure`),x.add(p,`quality`,Object.keys(Gf)).name(`Quality`).onChange(()=>{h.setSteps(Gf[p.quality].steps),v()}),x.add(p,`sound`).name(`Sound (M)`).onChange(e=>o.setMuted(!e)),Math.min(window.innerWidth,window.innerHeight)<600&&b.close(),d.onMode=e=>{f.active||(p.camera=e===`free`?`Free`:`Cinematic`,S.updateDisplay())};function C(e){let t=e===`Fly`;t&&!f.active&&f.enter(),!t&&f.active&&(f.exit(),l.endWreck(),d.mode=`free`),d.enabled=!t,t||d.setMode(e===`Free`?`free`:`cine`),p.camera=e,S.updateDisplay(),document.body.classList.toggle(`flying`,t),Hf.classList.remove(`on`)}let w=Ff({onFly:()=>C(f.active?`Cinematic`:`Fly`),onCamera:()=>C(d.mode===`cine`?`Free`:`Cinematic`),onView:()=>f.cockpit=!f.cockpit,onStrike:()=>s.strike(r,!0),onEnable:()=>b.close()});f.touch=w,d.touch=w,window.addEventListener(`keydown`,e=>{e.target instanceof HTMLInputElement||(e.code===`KeyF`?C(f.active?`Cinematic`:`Fly`):e.code===`KeyC`?C(f.active||d.mode!==`cine`?`Cinematic`:`Free`):e.code===`KeyL`?s.strike(r,!0):e.code===`KeyM`?(p.sound=!p.sound,o.setMuted(!p.sound),b.controllersRecursive().forEach(e=>e.updateDisplay())):e.code===`KeyH`&&document.body.classList.toggle(`clean`))});let T=()=>{o.start(),o.setMuted(!p.sound),Bf.classList.add(`heard`)};window.addEventListener(`pointerdown`,T,{once:!0}),window.addEventListener(`keydown`,T,{once:!0});let E=el(i),D=0,O=0,k=0,A=new W,j=new U,M=performance.now(),N=0,P=0;function ee(t){let n=Math.min((t-M)/1e3,.05);M=t,N+=n,P++,f.active?f.update(n):d.update(n),k>0&&(r.position.x+=(Math.random()-.5)*k,r.position.y+=(Math.random()-.5)*k,r.position.z+=(Math.random()-.5)*k,k=Math.max(0,k-n*2.5)),r.updateMatrixWorld(),s.update(n,r,f.active?f.vel:d.vel);let i=f.active&&f.respawnIn<=0&&!f.ground;i&&A.copy(f.state.velocityDir).multiplyScalar(f.state.speed);let o=c.update(n,N,i?f.state.location:null,A);if(l.update(n,r.position),a&&a.update(n,r,e.getDrawingBufferSize(j).y),i&&o.hits&&(f.damage=Math.min(100,f.damage+o.hits*Uf),f.damage>=100&&(f.state.crashed=!0),O=Math.min(1,O+.45*o.hits),k=Math.min(.6,k+.25*o.hits)),O=Math.max(0,O-n*2.2),Wf.style.opacity=O.toFixed(3),f.active&&P%6==0){let e=f.hud;Vf.innerHTML=`<span>SPD <b>${Math.round(e.speed)}</b> km/h</span><span>ALT <b>${Math.round(e.alt)}</b> m</span><span>${e.throttle}</span>${e.gear?`<span>${e.gear}</span>`:``}${e.prompt?`<span class="flag">${e.prompt}</span>`:``}${e.warn?`<span class="warn">${e.warn}</span>`:``}${o.plane?`<span class="spot">${o.plane}</span>`:``}${o.firing?`<span class="spot">UNDER FIRE</span>`:``}${f.damage>0?`<span${f.damage>60?` class="warn"`:``}>DMG <b>${Math.round(f.damage)}</b>%</span>`:``}${o.flagship>=0&&o.flagship<3e3?`<span class="flag">FLAGSHIP <b>${(o.flagship/1e3).toFixed(1)}</b> km</span>`:``}`}let h=f.active?Math.min(1,Math.max(0,(E(r.position,N)-.006)/.008)):0;D=h>D?D+(h-D)*Math.min(1,n*1.1):Math.max(0,D-n*.11),_.uniforms.uWet.value=D,_.uniforms.uWetTime.value=N,_.uniforms.uAspect.value=r.aspect,u.update(r),Q.uTime.value=N,Q.uCamPos.value.copy(r.position),_.uniforms.uExposure.value=p.exposure,_.uniforms.uSeed.value=P%64*17,m.render(n),requestAnimationFrame(ee)}window.__gorge={renderer:e,camera:r,rig:d,weather:s,shared:Q,params:p,composer:m,gorge:h,grade:_,mistAt:E,terrain:i,forest:u,flight:f,outposts:c,fx:l,airfield:a,setView:C,at(e,t=60,n=0,i=0,a=-.05){let o=d._point(e,new W),s=d._point(e+.02,new W);d.setMode(`free`);let c=1+n/Math.hypot(o.x,o.z);r.position.set(o.x*c,t,o.z*c),d.yaw=Math.atan2(-(s.x-o.x),-(s.z-o.z))+i,d.pitch=a,d.move.set(0,0,0)}},qf(1,`Ready`),ee(performance.now()),await Kf(),Lf.classList.add(`done`),document.body.classList.add(`ready`)}Jf().catch(e=>{console.error(e),zf.textContent=`Could not start: ${e.message}`});